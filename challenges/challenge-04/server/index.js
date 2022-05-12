const http = require("http");
const fs = require('fs').promises;
const path = require('path');

const host = 'localhost';
const port = 8000;

var mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css",
    "svg": "image/svg+xml"
};

const requestListener = function (req, res) {
    if (req.url === '/favicon.ico') return
    
    let dir = path.join(__dirname, '..', 'public')

    if (req.url === '/cars') dir += '/cars.html'
    else if (req.url === '/') dir += '/index.html'
    else dir += req.url;

    fs.readFile(dir)
        .then(contents => {
            var mimeType = mimeTypes[path.extname(dir).split(".")[1]];
            res.setHeader("Content-Type", mimeType);
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(String(err));
            return;
        });
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
