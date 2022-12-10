import { render, screen } from '@testing-library/react'
import { PostTemplate } from '.'

jest.mock('../../services/api', () => ({
  post: jest.fn()
}))

jest.mock('next-auth/react', () => ({
  useSession: jest.fn
}))

const post = {
  slug: 'my-new-post',
  title: 'My New Post',
  content: '<p>Post content</p>',
  updatedAt: '10 de Abril'
}

describe('<PostTemplate />', () => {
  it('should render correctly', () => {
    render(<PostTemplate post={post} previewMode />)

    expect(screen.getByText(/My New Post/i)).toBeInTheDocument()
    expect(screen.getByText('Post content')).toBeInTheDocument()
    expect(screen.getByText('10 de Abril')).toBeInTheDocument()
  })
})
