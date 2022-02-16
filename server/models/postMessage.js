import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    name: String,
    selectedFile: String,
    likes: { type: [String], default: [] },
    sentiment: {
        type: String,
        default: '0',
    }
})
postSchema.set('timestamps', true);

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;