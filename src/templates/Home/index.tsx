import Head from 'next/head'
import { SubscribeButton } from '../../components/SubscribeButton'

import S from './styles.module.scss'

export interface HomeProps {
  product: {
    priceId: string
    amount: string
  }
}

export function Home({ product }: HomeProps) {
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
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}
