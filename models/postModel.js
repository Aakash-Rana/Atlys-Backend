const mongoose = require('mongoose');
const opts = { toJSON: { virtuals: true } ,  toObject: { virtuals: true } };

const postSchema = new mongoose.Schema({
  body: {
    type: String,
  },
  type: {
    type: String,
    enum: ["post", "reply"],
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
  replies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  anonymous: {
    type: Boolean,
    default: false
  }
},opts);


const Post = mongoose.model('Post', postSchema);

module.exports = Post;