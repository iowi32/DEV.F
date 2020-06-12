// alert('Holaaaa')



// if(condicion){
//     accion en caso que sea verdad
// }else{
//     accion en caso que sea falso
// }

var num = 10


//   ---------------Operadores relaciones ---------------------
//   < menor que
//   <= menor igual
//   > mayor que
//   >= mayor igual
//   == comparar -> nunca lo usen
//   === comparar identicamente
//   !== difente de 

//var Pregunta = prompt('Teclea un numero master')
//var RealNum = Number(Pregunta)

//if(RealNum % 2 === 0){
//    console.log(RealNum + 'Par')
//}else if(RealNum % 2 === 1){
//    console.log(RealNum + 'Impar')
//}
//else{
//    console.error('Revisa tus datos master, andas mal!')
//}


// ------------------------- Challenge -------------------
// Investigar que es el MODULO -> % <-
//Si un numero es par o impar 
// P.d este numero lo tiene que dar el usiario.

// var Pregunta0 = prompt('Buenas tardes, ingresa tu usuario Men')
// var Pregunta1 = prompt('Pon tu contra men')

// if (Pregunta1 === 'perritoSalchicha123'){
//     console.log ('Ya la hiciste!')
// }else{
//     console.error('Tu contra esta mal, revisala')
// }

// ------------------------------------------Challenge--------------------

//Genera un número aleatorio entre un rango de enteros
function Juego(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];

var opcionUsuario;
var opcionMaquina = Juego(0,2);

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

alert("Tu Merengues " + opciones[opcionUsuario]);
alert("PC Master Race" + opciones[opcionMaquina]);

if(opcionUsuario == piedra)
{
    if(opcionMaquina == piedra)
    {
        console.log("Empate!");
    }
    else if(opcionMaquina == papel)
    {
        console.log("Perdiste");
    }
    else if(opcionMaquina == tijera)
    {
        console.log("Ganaste!");
    }
}
else if(opcionUsuario == papel)
{
    if(opcionMaquina == piedra)
    {
        console.log("Ganaste!");
    }
    else if(opcionMaquina == papel)
    {
        console.log("Empate!");
    }
    else if(opcionMaquina == tijera)
    {
        console.log("Perdiste!");
    }
}
else if(opcionUsuario == tijera)
{
    if(opcionMaquina == piedra)
    {
        console.log("Perdiste!");
    }
    else if(opcionMaquina == papel)
    {
        console.log("Ganaste!");
    }
    else if(opcionMaquina == tijera)
    {
        console.log("Empate!");
    }
}
else
{
    console.error("Achis, Achis los mariachis!");
}
