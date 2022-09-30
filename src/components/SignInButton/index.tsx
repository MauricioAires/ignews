import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import S from './styles.module.scss'

export function SignInButton() {
  const isUserLoggedIn = false

  return isUserLoggedIn ? (
    <button className={S.signInButton}>
      <FaGithub color="#04d361" /> Mauricio <FiX className={S.closeIcon} />
    </button>
  ) : (
    <button className={S.signInButton}>
      <FaGithub color="#eba417" /> Sing in wiht Github
    </button>
  )
}
