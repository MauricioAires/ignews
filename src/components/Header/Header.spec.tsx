import { render } from '@testing-library/react'
import { Header } from '.'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        events: {
          on: jest.fn,
          off: jest.fn
        }
      }
    }
  }
})

jest.mock('next-auth/react', () => ({
  signOut: jest.fn,
  useSession: jest.fn
}))

describe('<Header />', () => {
  it('should render correctly', () => {
    render(<Header />)
  })
})
