//siempre se llama al callback al final, en este caso el callback es operac

const operacion = (num1, num2, operac) =>{
    return operac (num1, num2)
}

const suma = (num1, num2) => {
    return num1 + num2
}

const resta = (suma , num2) =>{
    return suma - num2
}

const multiplicacion = (suma, num2, resta) => {
    return num2*suma-resta
}

console.log(operacion(2,3,suma))
console.log(operacion(2,3,resta))
console.log(operacion(2,3,multiplicacion))