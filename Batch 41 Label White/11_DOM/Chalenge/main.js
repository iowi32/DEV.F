let titulo = document.getElementById('titulo')

let orden = document.getElementById('orden')

let pregunta0 = document.getElementById('pregunta0')
let pregunta1 = document.getElementById('pregunta1')
let pregunta2 = document.getElementById('pregunta2')
let pregunta3 = document.getElementById('pregunta3')
let respuesta0 = document.getElementById('respuesta0')
let respuesta1 = document.getElementById('respuesta1')
let respuesta2 = document.getElementById('respuesta2')
let respuesta3 = document.getElementById('respuesta3')

let boton0 = document.getElementById('boton0')

const pintar = () => {
    titulo.innerHTML = "Danos un momento, tu orden estara lista en 30 minutos"

    console.log(pregunta0.value)
    respuesta0.innerHTML = pregunta0.value
    console.log(pregunta1.value)
    respuesta1.innerHTML = pregunta1.value
    console.log(pregunta2.value)
    respuesta2.innerHTML = pregunta2.value
    console.log(pregunta3.value)
    respuesta3.innerHTML = pregunta3.value
}
boton0.addEventListener("click", pintar)





