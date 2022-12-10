import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'
import S from './styles.module.scss'

export function SubscribeButton() {
  const { data } = useSession()
  const { push } = useRouter()

  const handelSubscribe = async () => {
    if (!data) {
      push('/login')
      return
    }

    if (data?.activeSubscription) {
      push('/posts')
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
