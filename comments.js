// Create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// Create comment
// api/comments
router.post('/', 
    auth,
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check('message', 'Message is required').not().isEmpty(),
        check('date', 'Date is required').not().isEmpty()
    ],
    commentController.createComment
);

// Get all comments
router.get('/',
    commentController.getComments
);

// Update comment via ID
router.put('/:id', 
    auth,
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check('message', 'Message is required').not().isEmpty(),
        check('date', 'Date is required').not().isEmpty()
    ],
    commentController.updateComment
);

// Delete comment via ID
router.delete('/:id', 
    auth,
    commentController.deleteComment
);

module.exports = router;