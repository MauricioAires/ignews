import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
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
