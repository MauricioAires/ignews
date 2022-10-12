import { GetStaticProps } from 'next'
import { RichText } from 'prismic-dom'
import { getPrismicClient } from '../../services/prismic'
import { Posts, PostsTemplateProps } from '../../templates/Posts'

export default function PostsPage(props: PostsTemplateProps) {
  return <Posts {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.getAllByType('post', {
    pageSize: 100,
    fetch: ['post.title', 'post.content']
  })

  const posts = response.map((post) => ({
    slug: post.uid,
    title: RichText.asText(post.data.title),
    abstract:
      post.data.content.find((content) => content.type == 'paragraph')?.text ??
      '',
    updatedAt: new Date(post.last_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }
    )
  }))

  return {
    props: {
      posts
    }
  }
}
