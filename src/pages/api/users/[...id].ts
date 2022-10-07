import { NextApiRequest, NextApiResponse } from 'next'

// jwt - (Storage)
// Next Auth ( Social )
// Cognito, Auth0

export default (request: NextApiRequest, response: NextApiResponse) => {
  const id = Number(request.query.id)

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

  return response.json(user.filter((i) => i.id === id))
}

// Server-less
