const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Route to serve the SDK JavaScript file with dynamic namespace
app.get('/sdk', (req, res) => {
    // const namespace = req.query.namespace || 'defaultNamespace';
    
    fs.readFile('sdk.js', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading SDK file');
            return;
        }

        // Replace the placeholder with the actual namespace
        // const sdkScript = data.replace(/__NAMESPACE__/g, namespace);
        
        res.setHeader('Content-Type', 'application/javascript');
        res.send(data);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
