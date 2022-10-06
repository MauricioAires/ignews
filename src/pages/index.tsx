import { GetServerSideProps } from 'next'
import { stripe } from '../services/stripe'
import { Home, HomeProps } from '../templates/Home'

/**
 *  Realizar a abstração do conteudo da pagina para um
 * template permite separar as chamadas APIs que são realizadas no SSR
 * e as chamas realizadas no cliente
 *
 * Alem de não precisar ter aquivos CSS no FILE SYSTEM ROOT
 */

export default function HomePage(props: HomeProps) {
  return <Home {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1LpkHEAd7ieJidZKE2hfDDMV')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }

  return {
    props: {
      product
    }
  }
}
