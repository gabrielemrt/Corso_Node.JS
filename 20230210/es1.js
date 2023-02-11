const http = require('http');
const HOSTNAME = '127.0.0.1';
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

console.log(1);

var datoPost = '';

  req.on('data', (data) => {
    //console.log(2)
    datoPost+=data  
})

  req.on('end', () => {
    //console.log(3)
    console.log(datoPost)
})

//console.log(4)
console.log(datoPost)
});

server.listen(PORT, HOSTNAME, () => { 
    console.log('Server Running');
    console.log(`Server at http://${HOSTNAME}:${PORT}/`)
});
