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



class usuario {
    constructor(name, surName, books, pets){
        this.name = name        
        this.surName = surName  
        this.books = books      
        this.pets = pets        
    }
    getFullName(){
        return (`${this.name} ${this.surName}`)
    }
    addMascota(namePet){
        return( this.pets.push( namePet ) )
    }
    countMascotas(){
        return(`Mascotas que tiene: ${this.pets.length}`)
    }
    addBook(nameBook, author){
        return( this.books.push ( {nameBook, author} ) )
    }
    getBooksName(){
        const mapNameBooks = this.books.map( book => book.nameBook )
        console.log(`${this.name} ${this.surName} tiene estos libros: ${mapNameBooks}`)
    }
}

const prueba = new usuario( "Federico", "Shierson", [], [] )

console.log(prueba.getFullName())
prueba.addMascota("Scooby")
prueba.addMascota("Tafy")
console.log(prueba.countMascotas())
prueba.addBook("Warcraft", "Richard A. Knaak")
prueba.addBook("Fuentes de Sol", "Richard A. Knaak")
prueba.getBooksName()