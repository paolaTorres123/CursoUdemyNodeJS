
/*var datos = require('./datos');

datos.log('Hola mundo');

console.log(module);

console.log(__filename);
console.log(__dirname);

const path = require('path');

const objPath = path.parse(__filename);

console.log(objPath.name);

const os = require('os');

var menoriaLibre = os.freemem();

var memoriaTotal = os.totalmem();

console.log(`Memoria libre: ${menoriaLibre}`);
console.log(`Memoria total: ${memoriaTotal}`);

const fs = require('fs');

const archicos = fs.readdirSync('./');
console.log(archicos);

fs.readdir('./', function(err,files){
    if(err) console.log('Error',err);
    else console.log('Resultado',files);
});

//Eventos

const EventEmitter = require('events');
const emitter = new EventEmitter(); //objeto creado

//Registrar lister
emitter.on('mensajeLoger', (arg) => {
    console.log('Listener lammando... ', arg);
});

//Resgistramos evento
emitter.emit('mensajeLoger',{ id:1, url:'http://prueba.com' });

//Modulo HTTP

const http = require('http');
const server = http.createServer();

server.on('connection', (puerto) => {
    console.log('Nueva conexion');
});

server.listen(3000);

console.log('Servidor escuchando en puero 3000');*/

const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/' ){
        res.write('Hola');
        res.end();
    }

    if(req.url === '/api/productos'){
        res.write(JSON.stringify(['mouse','teclado','pantalla']));
        res.end();
    }
});

server.listen(3000);

console.log('Servidor escuchando en puero 3000');