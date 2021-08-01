const Post = require('./models/Posts.model')

const resolvers = {
    Query: {
        hello: () => {
            return 'Hello world'
        },
        getAllPosts: async () => {
            return await Post.find()
        },
        getPost: async (parent, args, context, info) => {
            const {id} = args
            return await Post.findById(id)
        }
    },
    Mutation: {
        createPost: async (parent, args, context, info) => {
            const { title, content } = args.post
            const post = new Post({title, content})
            await post.save()
            return post
        }
    }
};

module.exports = resolvers;