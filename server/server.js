const express = require('express');
const colors = require('colors');
require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const connectDB = require('./config/connection.js');
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { typeDefs, resolvers } = require('./schema/schema.js');

const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

connectDB();

app.use(cors()); // relax security applied to an API

// app.listen(PORT, console.log(`Server is running on port ${PORT}`));
async function startServer() {
    const { url } = await startStandaloneServer(server, {
        listen: { port: PORT },
    });   
    
    console.log(`🚀  Server ready at: ${url}`);
}

startServer();


  