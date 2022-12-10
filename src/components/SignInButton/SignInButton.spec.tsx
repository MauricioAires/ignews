import { render, screen } from '@testing-library/react'
import { useSession } from 'next-auth/react'
import { SignInButton } from '.'

jest.mock('next-auth/react')

const useSessionMocked = jest.mocked(useSession)

describe('<SignInButton/>', () => {
  it('should render correctly when user is not authenticated', () => {
    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: 'unauthenticated'
    })

    render(<SignInButton />)

    expect(screen.getByText(/log in/i)).toBeInTheDocument()
  })

  it('should render correctly when user is  authenticated', () => {
    useSessionMocked.mockReturnValueOnce({
      data: {
        user: {
          name: 'Mauricio Aires',
          email: 'mauricioaires015@gmail.com',
          image: 'https://avatars.githubusercontent.com/u/33140781?v=4'
        },
        expires: '2023-01-09T13:34:29.858Z'
      },
      status: 'authenticated'
    })

    render(<SignInButton />)

    expect(screen.getByText(/Mauricio Aires/i)).toBeInTheDocument()
    expect(screen.queryByText(/log in/i)).not.toBeInTheDocument()
  })
})
