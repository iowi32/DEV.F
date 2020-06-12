



//Estructura

// for(inicio; limite; secuencia){
//     instruccion
// }


// Empiece en 0  su  - 200 limite y la secuencia  5

// for(var i = 0;  i >= -200; i = i - 5){
//     console.log(i)
// }

// Empiece en 500  su limite 0 y la secuencia 10

// for(var i = 500;  i >= 0; i = i - 10){
//     console.log(i)
// }

// Empiece en -500  su limite 0 y la secuencia 50

// for(var i = -500;  i <= 0; i = i + 50){
//      console.log(i)
//  }

// --------------------------Challege Cool-----------------
// Del 1 al 100
// Si el numero es divisible entre 3 ----> Fizz
// Si el numero es divisible entre 5 ----> Buzz
// Si el numeor es divisible entre 3 y 5 ---> FizzBuzz
// Ejemplo: 
// 1 
// 2
// 3 Fizz
// 4
// 5 Buzz
// ...
// 15 FizzBuzz
// 16
//Errores
// 15 fizz
// 15 buzz
// 15 fizzBuzz
// for(var x = -500;  x <= 0 ; x = x +50 ){
//     if(){
//         console.log(object)
//     }
// }

function fizzBuzz() {
    for (var i = 1; i <= 100; i = i + 1) {
      if ( i % 3 == 0 && i % 5 == 0 ) {
        console.log("FizzBuzz");
      }
      else if ( i % 3 == 0 ) {
        console.log("Fizz");
      }
      else if ( i % 5 == 0 ) {
        console.log("Buzz");
      }
      else {
        console.log(i);
      }
    }
  }
  
  fizzBuzz();