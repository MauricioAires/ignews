import Head from 'next/head'
import Link from 'next/link'
import S from './styles.module.scss'

type Post = {
  slug: string
  title: string
  abstract: string
  updatedAt: string
}

export interface PostsTemplateProps {
  posts: Post[]
}

export function Posts({ posts }: PostsTemplateProps) {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={S.container}>
        <div className={S.posts}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`}>
              <a href="#">
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.abstract}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}
