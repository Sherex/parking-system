import { ApolloServer } from 'apollo-server-micro'
import { typeDefs, resolvers } from './schemas'

const server = new ApolloServer({ typeDefs, resolvers })

module.exports = server.createHandler()

// TODO: https://dev.to/dipakkr/implementing-authentication-in-nodejs-with-express-and-jwt-codelab-1-j5i
// TODO: https://www.apollographql.com/docs/react/development-testing/static-typing/