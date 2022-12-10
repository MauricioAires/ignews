import { render, screen } from '@testing-library/react'
import { Posts } from '.'

const posts = [
  {
    slug: 'my-new-post',
    title: 'My New Post',
    abstract: 'Post abstract',
    updatedAt: '10 de Abril'
  }
]

describe('<Posts />', () => {
  it('should render correctly', () => {
    render(<Posts posts={posts} />)

    expect(screen.getByText(/My New Post/i)).toBeInTheDocument()
    expect(screen.getByText(/10 de Abril/i)).toBeInTheDocument()
    expect(screen.getByText(/Post Abstract/i)).toBeInTheDocument()
    expect(
      screen.getByRole('link', {
        name: /My New Post/
      })
    ).toHaveAttribute('href', '/posts/my-new-post')
  })
})
