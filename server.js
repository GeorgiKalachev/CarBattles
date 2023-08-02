const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

// Serve static files from the directory where index.html is located
app.use(express.static(__dirname));

// Serve index.html located in the root directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});