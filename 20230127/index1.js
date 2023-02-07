const http = require('http');
const url  = require('url');

const HOSTNAME = '127.0.0.1';
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    //res.end('Hello World!\n');

    console.log(url.parse(req.url).pathname);
    switch (url.parse(req.url)) {
            case "/data":
                res.end("27-01-2023");
                break;
            case "/nome":
                res.end("gabriele");
                break;
            case "/cognome":
                res.end("martini");
                break;
            default:
                res.end("END");
    }

});

server.listen(PORT, HOSTNAME, () => { 
    console.log('Server Running');
});
