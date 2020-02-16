import { createSchema, Type, ExtractDoc, ExtractProps } from 'ts-mongoose'
import { Connection, Schema, Document } from 'mongoose'
import { typedModelWrapper as typedModel } from './typedModelWrapper'

const userSchema = createSchema({
  firstname: Type.string({ required: true }),
  lastname: Type.string({ required: true }),
  username: Type.string({ required: true }),
  email: Type.string({ required: true }),
  registeredAddressIds: []
})

const addressSchema = createSchema({
  current_owner_id: Type.string({ required: true }),
  name: Type.string({ required: true }),
  address: {
    country: Type.string({ required: true }),
    county: Type.string({ required: true }),
    city: Type.string({ required: true }),
    zip: Type.number({ required: true }),
    street: Type.string({ required: true }),
    houseNumber: Type.string({ required: true })
  }
})


const parkingSpotSchema = createSchema({
  parent_address_id: Type.string({ required: true }),
  name: Type.string({ required: true }),
  mapCoords: {
    openStreetMap: {
      corner1: Type.string(),
      corner2: Type.string()
    }
  }
})

interface Schemas {
  [property: string]: Schema
}

const schemas: Schemas & Object = {
  User: userSchema,
  Address: addressSchema,
  ParkingSpot: parkingSpotSchema
}

function addModels(connection: Connection) {
  const models: any[] = []
  for (const name in schemas) {
    models.push(typedModel(name, { schema: schemas[name] }))
  }
  return models
}

export const User = typedModel('userModel', {
  schema: userSchema,
  statics: {
    getOwner: function (name: string) {
      return name // TODO: Actually get owner
    }
  }
})

export {
  userSchema,
  addressSchema,
  parkingSpotSchema
}

export { addModels }

export const Address = typedModel('addressModel', addressSchema)
export const ParkingSpot = typedModel('parkingSpotModel', parkingSpotSchema)

export type UserDoc = ExtractDoc<typeof userSchema>
export type UserProps = ExtractProps<typeof userSchema>

export type AddressDoc = ExtractDoc<typeof addressSchema>
export type AddressProps = ExtractProps<typeof addressSchema>

export type ParkingSpotDoc = ExtractDoc<typeof parkingSpotSchema>
export type ParkingSpotProps = ExtractProps<typeof parkingSpotSchema>
