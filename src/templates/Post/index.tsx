import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { getStripeJs } from '../../services/stripe-js'
import { api } from '../../services/api'

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

  const handelSubscribe = async (e) => {
    e.preventDefault()

    if (!data) {
      router.push('/login')
      return
    }

    if (data?.activeSubscription) {
      router.push('/posts')
      return
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Head>
        <title> {post.title} </title>
      </Head>
      <main className={S.container}>
        <article className={S.post}>
          <button
            className={S.buttonBack}
            title="Back to posts"
            type="button"
            onClick={() => router.back()}
          >
            <BsArrowLeftCircleFill size={20} />
          </button>

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
              <a href="#" onClick={handelSubscribe}>
                subscription now 🤗
              </a>
            </div>
          )}
        </article>
      </main>
    </>
  )
}
