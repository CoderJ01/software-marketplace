// const User = require('../models/User');
// const Form = require('../models/Form');
// const Table = require('../models/Table');

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
    user(userID: String!): User
  }
`;

const resolvers = {
    // Query: {
    //   // find all users
    //   users: () => {
    //     return User.find({});
    //   },
    //   // find all forms
    //   forms: () => {
    //     return Form.find();
    //   },
    //   // find all tables
    //   tables: () => {
    //     return Table.find();
    //   }
    // },
};

module.exports = { typeDefs, resolvers };