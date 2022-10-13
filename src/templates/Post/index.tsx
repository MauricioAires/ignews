import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import S from './styles.module.scss'

type Post = {
  slug: string
  title: string
  content: string
  updatedAt: string
}
export interface PostTemplateProps {
  post: Post
  previewMode: boolean
}

export function PostTemplate({ post, previewMode = false }: PostTemplateProps) {
  const { data } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (data?.activeSubscription) {
      router.push(`/posts/${post.slug}`)
    }
  }, [data])

  return (
    <>
      <Head>
        <title> {post.title} </title>
      </Head>
      <main className={S.container}>
        <article className={S.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>

          <div
            className={`${S.postContent} ${previewMode && S.previewContent}`}
            dangerouslySetInnerHTML={{
              __html: post.content
            }}
          />

          {previewMode && (
            <div className={S.continueReading}>
              Wanna continue reading?
              <Link href="/">
                <a href="">subscription now 🤗</a>
              </Link>
            </div>
          )}
        </article>
      </main>
    </>
  )
}
