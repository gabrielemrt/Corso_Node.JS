const http = require('http');
const url  = require('url');
const qs = require("querystring");
var validator = require("email-validator");


const HOSTNAME = '127.0.0.1';
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    var urlReq = url.parse(req.url);

    var querymail = qs.parse(urlReq.query);
    var valoreEmail = urlReq.query;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.end(validator.validate(valoreEmail).toString());
});

server.listen(PORT, HOSTNAME, () => { 
    console.log('Server Running');
});
