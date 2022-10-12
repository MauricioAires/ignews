import Head from 'next/head'

import S from './styles.module.scss'

type Post = {
  slug: string
  title: string
  content: string
  updatedAt: string
}
export interface PostTemplateProps {
  post: Post
}

export function PostTemplate({ post }: PostTemplateProps) {
  return (
    <>
      <Head>
        <title> {`${post.title} | Ignews`}</title>
      </Head>
      <main className={S.container}>
        <article className={S.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>

          <div
            className={S.postContent}
            dangerouslySetInnerHTML={{
              __html: post.content
            }}
          />
        </article>
      </main>
    </>
  )
}
