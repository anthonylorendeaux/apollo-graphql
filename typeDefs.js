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
        getPost(id: ID): Post
    }

    input PostInput {
        title: String, 
        content: String
    }

    type Mutation {
        createPost(post: PostInput): Post
    }
`;

module.exports = typeDefs;