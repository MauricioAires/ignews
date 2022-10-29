import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

import { FiX } from 'react-icons/fi'
import { GoVerified } from 'react-icons/go'
import { FiLogIn } from 'react-icons/fi'

import S from './styles.module.scss'

export function SignInButton() {
  const { data } = useSession()

  return data ? (
    <button className={S.signInButton} onClick={() => signOut()}>
      {data.activeSubscription ? (
        <GoVerified color="#61dafb" />
      ) : (
        <GoVerified color="#e1e1e6" />
      )}

      {data.user.name}
      <FiX className={S.closeIcon} />
    </button>
  ) : (
    <button className={S.signInButton}>
      <Link href="/login">
        <a>
          Log In <FiLogIn />
        </a>
      </Link>
    </button>
  )
}
