const User = require('../models/User');

const typeDefs = `
  type User {
    userID: String!
    firstName: String!
    lastName: String!
    industry: String!
    city: String!
    state: String!
    email: String!
    password: String!
    username: String
    token: String
  }

  type Form {
    name: String!
    fields: String!
    amount: Int!
    price: Float!
  }

  type Table {
    name: String!
    columns: String!
    rows: String!
    price: Float!
  }

  type Query {
    users: [User]
    forms: [Form]
    tables: [Table]
  }
`;

const resolvers = {
    Query: {
      // find all users
      users: () => {
        return User.find();
      }
    },
};

module.exports = { typeDefs, resolvers };