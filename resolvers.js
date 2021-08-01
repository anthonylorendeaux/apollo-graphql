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
        },
        deletePost: async (parent, args, context, info) => {
            const {id} = args
            await Post.findByIdAndDelete(id)
            return "Ok, post deleted"
        },
        updatePost: async (parent, args, context, info) => {
            const {id} = args;
            const { title, content } = args.post;
            const post = await Post.findByIdAndUpdate(id, {title, content}, {new: true})
            return post
        }
    }
};

module.exports = resolvers;