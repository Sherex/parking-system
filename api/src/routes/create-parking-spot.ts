import {Router, Request, Response} from 'express'
import { Guid } from 'guid-typescript'

const router: Router = Router()

router.get('/create', (req: Request, res: Response) => {
  const id: Guid = Guid.create()
  res.send('Hello, ID: ' + id)
})

export const createParkingSpot: Router = router