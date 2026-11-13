
 // Import Express library
const express = require("express");

// Import Node.js built-in path module
const path = require("path");

// Create our Express application
const app = express();

// Define our server port
const PORT = 3000;

// Serve CSS and other static files
app.use(express.static(path.join(__dirname, "public")));

// Route 1: Homepage
app.get("/", (req, res) => {

    // Send index.html to the browser
    res.sendFile(
        path.join(__dirname, "public", "index.html")
    );

});

// Route 2: Contact page
app.get("/contact", (req, res) => {

    // Send contact.html to the browser
    res.sendFile(
        path.join(__dirname, "public", "contact.html")
    );

});

// Start the Express server
app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);

});
