// Create Web server
const express = require('express');
const app = express();
// Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true, useUnifiedTopology: true });
// Create schema for comments
const commentSchema = new mongoose.Schema({
    name: String,
    comment: String
});
// Create model for comments
const Comment = mongoose.model('Comment', commentSchema);
// Create a new comment
const newComment = new Comment({ name: 'Pete Hunt', comment: 'This is one comment' });
newComment.save(function (err, comment) {
    if (err) return console.error(err);
    console.log(comment);
});
// Create route for comments
app.get('/', function (req, res) {
    Comment.find(function (err, comments) {
        if (err) return console.error(err);
        console.log(comments);
        res.send(comments);
    })
});
// Start server
app.listen(3000, function () {
    console.log('Server listening on port 3000');
});





