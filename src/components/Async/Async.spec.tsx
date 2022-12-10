import { waitFor, render, screen } from '@testing-library/react'
import { Async } from '.'

it('should render correctly', async () => {
  render(<Async />)

  expect(screen.getByText(/Hello World/i)).toBeInTheDocument()

  await waitFor(() => {
    expect(screen.queryByText(/Invisible/i)).not.toBeInTheDocument()
  })
})
