import Link from 'next/link'
import Image from 'next/image'
import { ActiveLink } from '../ActiveLink'
import { AiOutlineMenu } from 'react-icons/ai'

import { SignInButton } from '../SignInButton'
import S from './styles.module.scss'
import { FcCloseUpMode } from 'react-icons/fc'
import { RiCloseFill } from 'react-icons/ri'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { signOut, useSession } from 'next-auth/react'
import { GoVerified } from 'react-icons/go'

export function Header() {
  const [openModal, setOpenModal] = useState(false)
  const router = useRouter()
  const { data } = useSession()

  useEffect(() => {
    const onRouteChangeComplete = () => {
      setOpenModal(false)
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])
  return (
    <header
      className={`${S.headerContainer} ${openModal ? S.menuActive : ''} `}
    >
      <div className={S.headerContent}>
        <Link href="/">
          <div className={S.imageBox}>
            <Image
              layout="fill"
              objectFit="cover"
              src="/images/logo.svg"
              alt="ignews logo"
            />
          </div>
        </Link>

        <nav>
          <ActiveLink activeClassName={S.active} href="/">
            <a>Home</a>
          </ActiveLink>

          <ActiveLink activeClassName={S.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />

        <AiOutlineMenu
          className={S.menuButton}
          size={24}
          onClick={() => setOpenModal(!openModal)}
        />
      </div>

      <div
        className={` ${S.menuFull} ${openModal ? S.menuOpen : ''}`}
        aria-hidden={!openModal}
      >
        <nav>
          <ActiveLink activeClassName={S.active} href="/">
            <a>Home</a>
          </ActiveLink>

          <ActiveLink activeClassName={S.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>

          {data ? (
            <ActiveLink activeClassName={S.active} href="/?session=closed">
              <a onClick={() => signOut()}>Sign out</a>
            </ActiveLink>
          ) : (
            <ActiveLink activeClassName={S.active} href="/login">
              <a>Sign in </a>
            </ActiveLink>
          )}
        </nav>
      </div>
    </header>
  )
}
