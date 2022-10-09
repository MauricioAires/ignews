import Link from 'next/link'
import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <img src="/images/logo.svg" alt="Uma menina segurando um notebook" />
        </Link>

        <nav>
          <a className={styles.active} href="/">
            Home
          </a>
          <a href="/posts">Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
