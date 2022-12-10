import { fireEvent, render, screen } from '@testing-library/react'
import { useSession } from 'next-auth/react'

import { SubscribeButton } from '.'

const mockedPush = jest.fn((props) => props)

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockedPush
  })
}))

jest.mock('next-auth/react')

const useSessionMocked = jest.mocked(useSession)

jest.mock('../../services/api', () => ({
  post: jest.fn()
}))

describe('<SubscribeButton />', () => {
  it('should render correctly', () => {
    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: 'unauthenticated'
    })

    render(<SubscribeButton />)

    expect(screen.getByText(/Subscribe now/i)).toBeInTheDocument()
  })

  it('redirects user to sign in then not authenticated', () => {
    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: 'unauthenticated'
    })

    render(<SubscribeButton />)

    fireEvent.click(
      screen.getByRole('button', {
        name: /subscribe now/i
      })
    )

    expect(mockedPush).toBeCalledWith('/login')
  })

  it('redirects to posts when user already has a subscription', () => {
    useSessionMocked.mockReturnValueOnce({
      data: {
        user: {
          name: 'Mauricio Aires',
          email: 'mauricioaires015@gmail.com',
          image: 'https://avatars.githubusercontent.com/u/33140781?v=4'
        },
        expires: '2023-01-09T13:34:29.858Z',
        activeSubscription: 'active-subscription'
      },
      status: 'authenticated'
    })

    render(<SubscribeButton />)

    fireEvent.click(
      screen.getByRole('button', {
        name: /subscribe now/i
      })
    )

    expect(mockedPush).toBeCalledWith('/posts')
  })
})
