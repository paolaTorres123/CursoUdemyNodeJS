/*function saludo(nombre){
    console.log('Hola '+ nombre);
}

saludo('Paola');

//ES5 - Variables

var nombre = "Paola";
console.log(nombre);
nombre = "Paolo"
console.log(nombre);

//ES6+N- Variables
const nombre6 = "Luis";
let edad = 35;
console.log(nombre6);
console.log(edad);
let nombre2 = "ggg";
console.log(nombre2);

//Funciones flecha
//Funciones en ES5

const years = [2000,2005,2008,2012];

var edad5 = years.map(function(el){
    return 2019 - el;
})
console.log(edad5);

//Funciones en ES6 flecha
let edad6 = years.map((el) => {
    return 2019 - el;
})
console.log(edad6);

edad6 = years.map(el => 2019 - el);
console.log(edad6);

//Funciones CallBack

function Mensaje(callback){
    console.log('Mnesaje antes de la llamada callback.');
    callback();
}
function Saludo(){
    console.log('Saludo despues de la llamada a callback.');
}
Mensaje(Saludo);

function Sumar(num1, num2, callback){
    let resultado = num1 + num2;
    callback(resultado);
}
function Resultado(res){
    console.log(res);
}
Sumar(5, 8, Resultado);

setTimeout(function(){
    console.log('Esto se va ejecutar despues de 3 segundos');
}, 3000);

setTimeout(() => console.log('Esto se va ejecutar despues de 3 segundos'), 6000);


//Promesas
const mensaje = new Promise((resolve, reject) =>{
    setTimeout(() => {
        if(true)//if(false)
            resolve('Esto se va ejecutar despues de 3 segundos')
            else
                reject('Hubo un error.');
    }, 3000);

});

mensaje
    .then(msj =>{
        console.log(msj);
    })
    .catch(error => {
        console.log(error);
    });*/

function mensaje(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true)//if(false)
                resolve('Esto se va ejecutar despues de 3 segundos')
                else
                    reject('Hubo un error.');
        }, 3000);
    });
}
    
async function llamadaAsync(){
    console.log('Llammada....');
    const resultado = await mensaje();
    return resultado;
}
llamadaAsync().then(x => console.log(x)).catch(e => console.log(e));