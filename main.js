//let =  se puede entender como "lo que queda entre llaves"; 

//const = es casi lo mismo, solo que no se pude reasignar los valores, pero si se puede mutar
// con el ctrl + el boton que tiene }] se comenta toda la linea
// con el AltGr + el boton }] se hace el acento invertido ``




 
// funcion anonima

/* let func2 = function () {
    console.log("funcion anonima")
}

*/
//funcion con retorno
 /*
function suma (num, num2) {
    return num + num2
}
let resultado = suma(2,3)

function Nombre (nombre){
    console.log(`hola ${nombre} Shierson`)
    
}
Nombre("Fede")

*/
//template string = 


// actividad

/*
class Contador {
    constructor(nombre){
        this.nombre = nombre
        this.cuentaLocal = 0
    }
    static cuantaTotal = 0

    contar (){
        this.cuentaLocal++
        Contador.cuantaTotal++
    }
}

const pepe = new Contador ("fede")
const juana = new Contador ("juana")

juana.contar()
juana.contar()
juana.contar()

console.log(juana.cuentaLocal)
console.log(Contador.cuantaTotal)
pepe.contar()
pepe.contar()
pepe.contar()
console.log(pepe.cuentaLocal)
console.log(Contador.cuantaTotal)
*/

class Usuario {
    constructor(nombre, apellido, libro, mascotas ) {
        this.nombre = nombre
        this.apellido = apellido
        this.libro = libro
        this.mascotas = mascotas
    }
    getFullName (){
        console.log(`hola mi nombre es ${nombre} ${apellido}`);
    }

    addMascotas(){
        console.log(nombredeMascotas);
    }

    addBook () {
        libros.push({
            nombre: nombredellibro,
            autor: autordellibro
        });
    }
    getBookNames () {
        console.log(libros.map((libros) => libros.nombre))
    }
}

const usuario1 = new Usuario( "Federico", "Ezequiel", "cronicas de Guerra", "Scooby")
console.log(usuario1)