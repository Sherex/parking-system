import * as mongoose from 'mongoose'
const { Schema, model } = mongoose

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  registeredAddressIds: []
})

const userModel = model('userModel', userSchema)

const addressSchema = new Schema({
  current_owner_id: String,
  name: String,
  address: {
    country: String,
    county: String,
    city: String,
    zip: Number,
    street: String,
    houseNumber: String
  }
})

const addressModel = model('addressModel', addressSchema)

const parkingSpotSchema = new Schema({
  parent_address_id: String,
  name: String,
  mapCoords: {
    openStreetMap: {
      corner1: String,
      corner2: String
    }
  }
})

const parkingSpotModel = model('parkingSpotModel', parkingSpotSchema)

export {
  userModel,
  addressModel,
  parkingSpotModel
}
