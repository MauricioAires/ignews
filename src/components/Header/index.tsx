import Link from 'next/link'
import Image from 'next/image'
import { ActiveLink } from '../ActiveLink'

import { SignInButton } from '../SignInButton'
import S from './styles.module.scss'

export function Header() {
  return (
    <header className={S.headerContainer}>
      <div className={S.headerContent}>
        <Link href="/">
          <div className={S.imageBox}>
            <Image
              layout="fill"
              objectFit="cover"
              src="/images/logo.svg"
              alt="Uma menina segurando um notebook"
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
      </div>
    </header>
  )
}
