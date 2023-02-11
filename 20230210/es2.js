/*
CONFRONTARE UNA VARIABILE POST (password) CHE SIA UGUALE AD UNA COSTANTE LATO SERVER DA INVIARE CON WORKSPACE
*/

const http = require('http');
const qs = require('querystring')
const HOSTNAME = '127.0.0.1';
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const password = 'Matteo';
    var datoPost = '';

    req.on('data',(data) => {
        datoPost += data;
    })


    req.on('end',()    => {
        var querypass = qs.parse(datoPost);
        var valore_pass = querypass.pass;

        console.log(valore_pass);

        if (valore_pass == password) {
            console.log('OKAY');
        } else {
            console.log('ERROR');
        }
    })

});

server.listen(PORT, HOSTNAME, () => { 
    console.log('Server Running');
    console.log(`Server at http://${HOSTNAME}:${PORT}/`);
});