import { render, screen } from '@testing-library/react'

import { ActiveLink } from '.'

/**
 * @description debug
 */

/**
 * @description mock
 */

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

/**
 * Verificiar se o item está renderizando corretamente
 */

describe('<ActiveLink/>', () => {
  it('renders correctly', () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )

    expect(
      screen.getByRole('link', {
        name: /home/i
      })
    ).toBeInTheDocument()
  })

  it('adds active class if the link as currently active', () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )

    expect(
      screen.getByRole('link', {
        name: /home/i
      })
    ).toHaveClass('active')
  })
})
