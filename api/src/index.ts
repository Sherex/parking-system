import express, { Application } from 'express'
import { createParkingSpot } from './routes'

const app: Application = express()

app.use('/parking', createParkingSpot)

app.listen(3000, () => console.log(`Server is running`))

// TODO: https://dev.to/dipakkr/implementing-authentication-in-nodejs-with-express-and-jwt-codelab-1-j5i
// TODO: https://www.apollographql.com/docs/react/development-testing/static-typing/