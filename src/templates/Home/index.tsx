import Head from 'next/head'
import Image from 'next/image'
import { SubscribeButton } from '../../components/SubscribeButton'

import S from './styles.module.scss'

export interface HomeProps {
  product: {
    priceId: string
    amount: string
  }
}

export function Home({ product }: HomeProps) {
  /**
   * está é a forma mais hardcore de pegar o ano atual e somar mais 1
   */
  const nextYear = new Date(
    new Date().setFullYear(new Date().getFullYear() + 2)
  ).toLocaleDateString('pt-BR', {
    year: '2-digit'
  })
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={S.contentContainer}>
        <section className={S.hero}>
          <span> 👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>

          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <div className={S.tip}>
            <SubscribeButton />
            <p aria-readonly>
              <b>DICA:</b> preencha o formulário com o número do cartão (CVV)
              <span>4242 4242 4242 4242</span>, data de validade
              <time> 09/{nextYear}</time>, e código segurança (CVV)
              <span>171</span>, para gerar uma inscrição valida.
            </p>
          </div>
        </section>

        <div className={S.banner}>
          <Image
            width="336"
            height="521"
            src="/images/avatar.svg"
            alt="Girl coding"
          />
        </div>
      </main>
    </>
  )
}
