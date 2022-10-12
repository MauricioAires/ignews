import Link from 'next/link'
import { ActiveLink } from '../ActiveLink'

import { SignInButton } from '../SignInButton'
import S from './styles.module.scss'

export function Header() {
  return (
    <header className={S.headerContainer}>
      <div className={S.headerContent}>
        <Link href="/">
          <img src="/images/logo.svg" alt="Uma menina segurando um notebook" />
        </Link>

        <nav>
          <ActiveLink activeClassName={S.active} href="/">
            <a>Home</a>
          </ActiveLink>

          <ActiveLink activeClassName={S.active} href="/posts" prefetch>
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
