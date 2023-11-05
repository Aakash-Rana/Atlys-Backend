const Post = require('./../models/postModel')
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');



exports.getAllPosts = catchAsync(async (req, res, next) => {

    const doc = await Post.find({}).select('body user createdAt anonymous').populate('user', 'username')

    const resp = doc.map((post) => {
        if (post.anonymous) post.user=undefined;
        post.anonymous=undefined;
        return post;
    })

    // SEND RESPONSE
    res.status(200).json({
        status: 'success',
        results: doc.length,
        data: {
            data: resp
        }
    });
});


exports.createPost = catchAsync(async (req, res, next) => {
    req.body.user=req.user;
    const doc = await Post.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            data: doc
        }
    });
});

exports.deletePost = catchAsync(async (req,res,next)=>{
    const post= await Post.findById(req.body.id);
    if(!post) return next(new AppError('Invalid Post Id', 404));
   
    if(post.user && post.user.toString()!=req.user.id)
    return next(new AppError('You can only delete your posts', 401));

    await Post.findByIdAndDelete(req.body.id);

    res.status(204).json({
        status: 'success',
        data: null
    });
});

