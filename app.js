const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the public directory (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Serve static HTML files from the 'views' directory
app.use(express.static(path.join(__dirname, 'views')));

// Simple middleware to set content type for HTML files
app.use((req, res, next) => {
    if (req.path.endsWith('.html')) {
        res.set('Content-Type', 'text/html');
    }
    next();
});

// Serve static HTML files for each route manually
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'projects.html'));
});

app.get('/codesProjects', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'codesProjects.html'));
});

app.get('/designProjects', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'designProjects.html'));
});

// Error handling middleware for undefined routes
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
