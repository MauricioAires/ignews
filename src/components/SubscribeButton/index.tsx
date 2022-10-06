import S from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return (
    <button type="button" className={S.subscribeButton}>
      Subscribe now
    </button>
  )
}
