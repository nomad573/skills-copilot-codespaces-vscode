// Create web server 
// Create a web server that listens for requests on port 3000 and responds with the following:
// 1. A request to /comments should return an array of comments
// 2. A request to /comments/0 should return the first comment in the array
// 3. A request to /comments/3 should return the fourth comment in the array
// 4. A request to /comments/4 should return an error status code

// Import express module
const express = require('express');

// Create express app
const app = express();

// Create an array of comments
const comments = [
    { name: 'John', comment: 'Hello' },
    { name: 'Mary', comment: 'Hi' },
    { name: 'Bob', comment: 'Howdy' }
];

// Create a route for /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create a route for /comments/:index
app.get('/comments/:index', (req, res) => {
    const index = req.params.index;
    if (index < comments.length) {
        res.json(comments[index]);
    } else {
        res.status(404).json({ error: 'Comment not found' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});