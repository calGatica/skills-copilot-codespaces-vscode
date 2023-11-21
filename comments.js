// Create web server with Node.js

// Import modules
const express = require('express');
const router = express.Router();

// Import controller
const commentsController = require('../controllers/commentsController');

// Import middleware
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Create routes
router.get('/', auth, commentsController.getComments);
router.post('/', auth, multer, commentsController.createComment);
router.put('/:id', auth, multer, commentsController.updateComment);
router.delete('/:id', auth, commentsController.deleteComment);

// Export router
module.exports = router;