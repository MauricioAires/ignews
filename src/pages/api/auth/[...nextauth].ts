import { query as q } from 'faunadb'
import NextAuth from 'next-auth/next'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

import { fauna } from '../../../services/fauna'

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
      // @ts-ignore
      scope: 'read:user' // Que tipos de permissões será solicitado ao github
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async session({ session }) {
      try {
        /***
         * @description Callback session do nextAuth permite que seja
         * feito alterar dentro da session do usuário, aletaresções
         * essa como adicionar novos dados dentro do session
         */

        const userActiveSubscription = await fauna.query(
          q.Get(
            q.Intersection([
              q.Match(
                q.Index('subscription_by_user_ref'),
                q.Select(
                  'ref',
                  q.Get(
                    q.Match(
                      q.Index('user_by_email'),
                      q.Casefold(session.user.email)
                    )
                  )
                )
              ),
              q.Match(q.Index('subscription_by_status'), 'active')
            ])
          )
        )

        return {
          ...session,
          activeSubscription: userActiveSubscription
        }
      } catch (error) {
        return {
          ...session,
          activeSubscription: null
        }
      }
    },
    async signIn({ user }) {
      const { email } = user

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(q.Match(q.Index('user_by_email'), q.Casefold(email)))
            ),
            q.Create(q.Collection('users'), { data: { email } }),
            q.Get(q.Match(q.Index('user_by_email'), q.Casefold(email)))
          )
        )

        return true
      } catch {
        return '/'
      }

      /**
       * @description Quano o usuário não tem permissão para realizar
       * o login é possivel colocar para onde ele deve ser redirecionado
       *
       * poseria ser uma pagina de /unauthorized
       */
    }
  }
})

// FaunaDB - HTTP
