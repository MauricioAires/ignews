import { stripe } from '../../services/stripe'

import { getStaticProps } from '../../pages'

jest.mock('../../templates/Home', () => ({
  Home: function Mock() {
    return <div data-testid="Mock HomeTemplate" />
  }
}))

const mockedRetrieveStripePrices = jest.mocked(stripe.prices.retrieve)

jest.mock('../../services/stripe')

describe('<HomePage />', () => {
  it('loads initial data', async () => {
    mockedRetrieveStripePrices.mockResolvedValueOnce({
      id: 'fake-price-id',
      unit_amount: 1000
    } as any)

    const response = await getStaticProps({})

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            amount: '$10.00',
            priceId: 'fake-price-id'
          }
        }
      })
    )
  })
})
