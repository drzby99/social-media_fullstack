import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    /*createdAt: {
        type: Date,
        default: Date.now,
    },*/
    sentiment: {
        type: String,
        default: '0',
    }
})
postSchema.set('timestamps', true);

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;