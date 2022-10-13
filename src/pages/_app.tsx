import { AppProps } from 'next/app'
import { SessionProvider as NextAuthProvider } from 'next-auth/react'
import { DefaultSession } from 'next-auth'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import '../styles/global.scss'

type PagePropsLocal = {
  session: DefaultSession
}

function MyApp({ Component, pageProps }: AppProps<PagePropsLocal>) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
      <Footer />
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
