import { typedModel } from 'ts-mongoose'
import { Schema, Connection, Document, Model } from 'mongoose'

export interface typedModelWrapperOptions {
  schema?: Schema,
  collection?: string,
  skipInit?: boolean,
  statics?: { [name: string]: Function },
  connection?: Connection
}

export function typedModelWrapper (name: string, { schema, collection, skipInit, statics, connection }: typedModelWrapperOptions) {
  return typedModel(
    name,
    schema,
    collection,
    skipInit,
    statics,
    connection
  )
}
