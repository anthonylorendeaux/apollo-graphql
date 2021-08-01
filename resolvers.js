const Post = require('./models/Posts.model')

const resolvers = {
    Query: {
        hello: () => {
            return 'Hello world'
        },
        getAllPosts: async () => {
            return await Post.find()
        }
    },
};

module.exports = resolvers;