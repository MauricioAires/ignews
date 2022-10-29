import Image from 'next/image'
import Link from 'next/link'

import { SiGithub } from 'react-icons/si'
import { RiRocket2Fill } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'

import S from './styles.module.scss'

export function Footer() {
  return (
    <footer className={S.wrapper}>
      <div className={S.content}>
        <div className={S.contacts}>
          <Link href="/">
            <div className={S.imageBox}>
              <Image
                layout="fill"
                objectFit="cover"
                src="/images/logo.svg"
                alt="Ignews logo"
              />
            </div>
          </Link>

          <div>
            <Link href="https://www.linkedin.com/in/mauricioairs/">
              <a target="_blank">
                <BsLinkedin size={20} />
              </a>
            </Link>

            <Link href="https://github.com/MauricioAires">
              <a target="_blank">
                <SiGithub size={20} />
              </a>
            </Link>

            <Link href="https://app.rocketseat.com.br/me/mauricio-aires">
              <a target="_blank">
                <RiRocket2Fill size={20} />
              </a>
            </Link>
          </div>
        </div>

        <hr />
        <div className={S.copyright}>
          <span>© 2022 ignews | ignite</span>

          <div>
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
