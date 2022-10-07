import { NextApiRequest, NextApiResponse } from 'next'
export default (request: NextApiRequest, response: NextApiResponse) => {
  const user = [
    {
      id: 1,
      name: 'Maumau'
    },
    {
      id: 2,
      name: 'Dani'
    },
    {
      id: 3,
      name: 'Raf'
    }
  ]

  return response.json(user)
}

// Server-less
