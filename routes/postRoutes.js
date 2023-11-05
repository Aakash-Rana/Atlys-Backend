const express = require('express');
const postController = require('./../controllers/postController')
const authController = require('./../controllers/authController')

const router = express.Router();

// Protect all routes after this middleware
router.use(authController.protect);

router.get('/',postController.getAllPosts)
router.post('/',postController.createPost)
router.delete('/',postController.deletePost)

module.exports = router;
