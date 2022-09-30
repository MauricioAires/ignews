/**
 * Este arquivo é equivamente o
 * publix/index.html do react, onde é
 * adicionado os metas, head
 */

import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        </Head>
        <body>
          {/* Todo o conteúdo da aplicação setá reendirirado aqui assim como o id="root" */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
