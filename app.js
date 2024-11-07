const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the public directory (CSS, JS, images, etc.)
app.use(express.static('public'));
app.use(express.static('views')); // Also serve HTML files from views directory

// Simple middleware to set content type for HTML files
app.use((req, res, next) => {
    if (req.path.endsWith('.html')) {
        res.set('Content-Type', 'text/html');
    }
    next();
});

// Define routes map for cleaner routing
const routes = {
    '/': 'index.html',
    '/about': 'about.html',
    '/projects': 'projects.html',
    '/codesProjects': 'codesProjects.html',
    '/designProjects': 'designProjects.html'
};

// Set up routes dynamically
Object.entries(routes).forEach(([route, file]) => {
    app.get(route, (req, res) => {
        res.sendFile(path.join(__dirname, 'views', file));
    });
});

// Error handling middleware
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});