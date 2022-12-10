import { getServerSideProps } from '../../pages/posts/[slug]'
import { getSession } from 'next-auth/react'

import { getPrismicClient } from '../../services/prismic'

jest.mock('../../services/prismic')

const mockedGetPrismicClient = jest.mocked(getPrismicClient)

jest.mock('../../templates/Post', () => ({
  Post: function Mock() {
    return <div data-testid="Mock Post" />
  }
}))

jest.mock('next-auth/react')

const mockedGetSession = jest.mocked(getSession)

describe('<PostPage />', () => {
  it('redirects user if no subscribe is found ', async () => {
    mockedGetSession.mockResolvedValueOnce({
      activeSubscription: null
    } as any)

    const response = await getServerSideProps({
      params: {
        slug: 'mock-slug'
      }
    } as any)

    expect(response).toEqual(
      expect.objectContaining({
        redirect: expect.objectContaining({
          destination: '/posts/preview/mock-slug'
        })
      })
    )
  })

  it('load initial data ', async () => {
    mockedGetSession.mockResolvedValueOnce({
      activeSubscription: 'fake-active-subscription'
    } as any)

    mockedGetPrismicClient.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        uid: 'my-new-post',
        data: {
          title: [
            {
              type: 'heading',
              text: 'My New Post'
            }
          ],

          content: [
            {
              type: 'paragraph',
              text: 'Post Abstract'
            }
          ]
        },
        last_publication_date: '2020-01-01'
      })
    } as any)

    const response = await getServerSideProps({
      params: {
        slug: 'fake-slug'
      }
    } as any)

    expect(response).toEqual(
      expect.objectContaining({
        props: expect.objectContaining({
          post: {
            content: '<p>Post Abstract</p>',
            slug: 'fake-slug',
            title: 'My New Post',
            updatedAt: '31 de dezembro de 2019'
          }
        })
      })
    )
  })
})
