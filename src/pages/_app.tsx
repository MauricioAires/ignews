import { AppProps } from 'next/app'
import { SessionProvider as NextAuthProvider } from 'next-auth/react'
import { DefaultSession } from 'next-auth'

import '../styles/global.scss'
import { useRouter } from 'next/router'
import { BaseTemplate } from '../templates/Base'

type PagePropsLocal = {
  session: DefaultSession
}

function MyApp({ Component, pageProps }: AppProps<PagePropsLocal>) {
  const { asPath } = useRouter()
  return (
    <NextAuthProvider session={pageProps.session}>
      {asPath === '/login' ? (
        <Component {...pageProps} />
      ) : (
        <BaseTemplate>
          <Component {...pageProps} />
        </BaseTemplate>
      )}
    </NextAuthProvider>
  )
}

export default MyApp

/**
 * Scoped CSS
 *
 * ex: syulesd-componentes, sass
 *
 * um css nunca afetar outro componente
 *
 * x.module.css, não é possivel realizar a estilização direta em elementos
 * sempre deve iniciar com uma classe ou umas id
 *
 *
 * File System Root
 *
 * Sistema de rotemaneot apatir do nome do arquivo
 *
 * _app é o componente padrão
 */
