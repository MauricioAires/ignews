import { render, screen } from '@testing-library/react'

import { Home } from '.'

jest.mock('../../components/SubscribeButton', () => ({
  SubscribeButton: function Mock() {
    return <div data-testid="Mock Menu"></div>
  }
}))

describe('<Home/>', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Home
        product={{
          priceId: 'fake-price-id',
          amount: 'R$10,00'
        }}
      />
    )

    expect(screen.getByText(/R\$10,00/i)).toBeInTheDocument()
    expect(screen.getByTestId(/Mock Menu/i)).toBeInTheDocument()
  })
})
