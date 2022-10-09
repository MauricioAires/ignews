import { signIn, useSession } from 'next-auth/react'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'
import S from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data } = useSession()

  const handelSubscribe = async () => {
    if (!data) {
      // Mnadar para a pagina de login
      signIn('github')
      return
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button
      type="button"
      className={S.subscribeButton}
      onClick={handelSubscribe}
    >
      Subscribe now
    </button>
  )
}

/**
 *  @description Locais que pode utilizar as variavel de ambiente secretas
 *
 * getServerSideProps
 * getStaticProps
 * pages/api -> API routes
 *
 */
