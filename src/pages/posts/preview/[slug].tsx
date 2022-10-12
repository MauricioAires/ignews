import { GetStaticPaths, GetStaticProps } from 'next'
import { RichText } from 'prismic-dom'
import { getPrismicClient } from '../../../services/prismic'
import { PostTemplate, PostTemplateProps } from '../../../templates/Post'

export default function PostPreviewPage(props: PostTemplateProps) {
  return <PostTemplate {...props} previewMode />
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
    /**
     * true => realizar a requisição do lado do clinte
     * false => retornar um 404 -> não vai gerar um estatico
     * blocking => bloquear o retorno gerar o estatico no server side e retornar (para o SEO conter os dados )
     */
  }
}
/**
 * @description
 */

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params

  const prismic = getPrismicClient()

  const response = await prismic.getByUID('post', String(slug), {})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 3)),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }
    )
  }

  return {
    props: {
      post
    },
    revalidate: 60 * 30 // 30 minutos
  }
}
