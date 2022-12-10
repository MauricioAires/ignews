import { getStaticProps } from '../../pages/posts'
import { getPrismicClient } from '../../services/prismic'

jest.mock('../../services/prismic')

jest.mock('../../templates/Posts', () => ({
  Posts: () => <div data-testid="Mock PostsTemplate" />
}))

describe('<PostsPage />', () => {
  it('loads initial data', async () => {
    const mockedGetPrismicClient = jest.mocked(getPrismicClient)

    mockedGetPrismicClient.mockReturnValueOnce({
      getAllByType: jest.fn().mockResolvedValueOnce([
        {
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
        }
      ])
    } as any)

    const response = await getStaticProps({})

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: [
            {
              abstract: 'Post Abstract',
              slug: 'my-new-post',
              title: 'My New Post',
              updatedAt: '31 de dezembro de 2019'
            }
          ]
        }
      })
    )
  })
})
