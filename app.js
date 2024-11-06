const express = require('express');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define the route for the home page
app.get('/', (req, res) => {
    res.render('index'); 
});
app.get('/about', (req, res) => {
    res.render('about'); 
});
app.get('/projects', (req, res) => {
    res.render('projects'); 
});
app.get('/codesProjects', (req, res) => {
    res.render('codesProjects'); 
});
app.get('/designProjects', (req, res) => {
    res.render('designProjects'); 
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
