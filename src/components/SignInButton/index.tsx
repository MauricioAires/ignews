import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'

import S from './styles.module.scss'
import { useEffect } from 'react'

export function SignInButton() {
  const { data } = useSession()

  return data ? (
    <button className={S.signInButton} onClick={() => signOut()}>
      <FaGithub color="#04d361" />
      {data.user.name}
      <FiX className={S.closeIcon} />
    </button>
  ) : (
    <button className={S.signInButton} onClick={() => signIn('google')}>
      <FaGithub color="#eba417" /> Sing in wiht Github
    </button>
  )
}
