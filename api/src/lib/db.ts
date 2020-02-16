// import mongoose = require('mongoose')
import mongoose, { Connection } from 'mongoose'
import { typedModel } from 'ts-mongoose'
import { 
  User,
  Address,
  ParkingSpot,
  UserDoc,
  UserProps,
  AddressDoc,
  AddressProps,
  ParkingSpotDoc,
  ParkingSpotProps,
  userSchema,
  addressSchema,
  parkingSpotSchema
} from './db-models-ts'
const connection = new mongoose.Connection(mongoose)

// module.exports = (dbName: string, username: string, password: string) => {
const mongo = (dbName: string, username: string, password: string, mongooseOptions: mongoose.ConnectionOptions) => {
  
  async function createConnection () {
    const connection = mongoose.createConnection(`mongodb://localhost:27017/`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName,
      user: username,
      pass: password,
      ...mongooseOptions
    })
    
    const UUser = typedModel('User', userSchema, undefined, undefined, undefined, connection)
    return { connection, UUser}
  }

  return {
    connection: createConnection,
    // users: {
    //   ...modelFunctions(createConnection, 'users')
    // },
    // addresses: {
    //   ...modelFunctions(createConnection, 'addresses')
    // },
    // parkingSpots: {
    //   ...modelFunctions(createConnection, 'parkingSpots')
    // }
  }
}

function modelFunctions (createConnection: () => Promise<Connection>, collectionName: string) {
  return {
    getById: (id: string) => findDocument(createConnection, collectionName),
    create: (document: UserDoc) => insertOneDocument(createConnection, collectionName, document)
  }
}

async function findDocument (createConnection: () => Promise<Connection>, collectionName: string) {
  const connection = await createConnection()
  const data = await connection.collection(collectionName).find()
  await connection.close()
  return data
}

async function insertOneDocument (createConnection: () => Promise<Connection>, collectionName: string, document: UserDoc) {
  const connection = await createConnection()
  const data = await connection.collection(collectionName).insertOne(document)
  await connection.close()
  return data
}

const pSpot = {
  parent_address_id: '123',
  name: 'test'
}

const user = {
  firstname: 'Sherex',
  lastname: 'Tech',
  username: 'Sherex',
  email: '123@123'
}

;(async () => {

  // console.log(mongoose instanceof Mongoose)

  // const db = await mongo('test', 'test', 'example').connection()
  // const conn = await db.connection
  // const UUser = db.UUser
  // console.log(db.modelNames())
  // console.log(db.model('User').find({ name: 'Peter' }))
  //const bd = db.model('ParkingSpot', ParkingSpot.schema)
  // await db.model(ParkingSpot).create(pSpot)
  // conn.close()
})()
