//Funciones

//Vanilla js
// var num1 = 10
// var num1  = 'fhiuafsd'

//ECMA 5
// let num2 = 10 
//     num2 = 'ghjsdlkgd'

// vanillajs
function saludo (){

    console.log('hola Ricardo')
}

saludo()

//ECMA 5 Arrow fuction
const saludar2 = (nombre, edad) => {

    console.log("Hola " + nombre + ' y tienes la edad de: ' + edad)
}

//        nombre, edad   
saludar2('Ricardo', 22)
saludar2('Oliver', 27)
saludar2('Dana', 29)


const sum = (x, y) => {
console.log(x + y)
}

sum(50, 100)


//Van hacer una funcion que nos de el perimetro de un cuadrado

const cuadrado = (x) => {
    console.log( x * 4)
}
cuadrado(15)  

// Area de un reactangulo
const reactangulo = (b,a) => {
    console.log( b * a /2 )
}

reactangulo(8,6)
// Area de un triangulo
const triangulo = (x,y) => {
    console.log( x * y )
}

triangulo(7,12)