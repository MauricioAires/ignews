import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import S from './styles.module.scss'

export function LoginTemplate() {
  return (
    <main className={S.main}>
      <div className={S.background}>
        <div className={S.bannerBlock}>
          <Image
            src="/images/background.webp"
            objectFit="cover"
            layout="fill"
          />

          <div className={S.content}>
            <div className={S.logo}>
              <Link href="/">
                <a>
                  <Image
                    src="/images/logo.svg"
                    objectFit="cover"
                    layout="fill"
                  />
                </a>
              </Link>
            </div>

            <h1>Artigos sobre Tecnologia para Programadores</h1>
            <p>
              Confira nossos artigos exclusivos sobre os mais variados temas
              sobre Tecnologia e Engenharia da Informação.
            </p>

            <span>© 2022 ignews | ignite</span>
          </div>
        </div>
      </div>
      <div className={S.wrapperLogin}>
        <div className={S.loginContent}>
          <div className={S.logo}>
            <Link href="/">
              <a>
                <Image
                  src="/images/logo-dark.svg"
                  objectFit="cover"
                  layout="fill"
                />
              </a>
            </Link>
          </div>

          <div className={S.info}>
            <h1>Artigos sobre Tecnologia para Programadores</h1>
            <p>
              Confira nossos artigos exclusivos sobre os mais variados temas
              sobre Tecnologia e Engenharia da Informação.
            </p>
          </div>

          <div className={S.loginButtons}>
            <button onClick={() => signIn('github')} className={S.signInButton}>
              <FaGithub />
              Continue with Github
            </button>

            <span>or</span>

            <button
              onClick={() => signIn('google')}
              className={`${S.signInButton} ${S.signInButtonGoogle}`}
            >
              <FcGoogle />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
