const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Post {
        id: ID,
        title: String,
        content: String,
    },

    type Query {
        hello: String,

        getAllPosts: [Post]
    }
`;

module.exports = typeDefs;