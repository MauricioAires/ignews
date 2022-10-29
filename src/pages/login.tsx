import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { LoginTemplate } from '../templates/Login'

export default function LoginPage() {
  return <LoginTemplate />
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({
    req
  })

  // se estiver logado mandar para home
  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
