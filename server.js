const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {

    // GET form
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.end(`
            <h2>GET Form</h2>
            <form method="GET" action="/get">
                Name: <input type="text" name="name">
                <input type="submit" value="Submit">
            </form>

            <h2>POST Form</h2>
            <form method="POST" action="/post">
                Name: <input type="text" name="name">
                <input type="submit" value="Submit">
            </form>
        `);
    }

    // GET request
    else if (req.method === 'GET' && req.url.startsWith('/get')) {
        const data = querystring.parse(req.url.split('?')[1]);

        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.end(`<h2>GET Data: Hello ${data.name}</h2>`);
    }

    // POST request
    else if (req.method === 'POST' && req.url === '/post') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            const data = querystring.parse(body);

            res.writeHead(200, { 'Content-Type': 'text/html' });

            res.end(`<h2>POST Data: Hello ${data.name}</h2>`);
        });
    }

    // 404
    else {
        res.writeHead(404);
        res.end('Page Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});