// const fs = require('fs')

// try{
//     fs.writeFileSync('./index.html',new Date().toLocaleString())
// } catch (err) {
//     throw new Error('Error en la escritura'+ err)
// }


                 // ejercicio de la clase 

// los \n son saltos de lineas
/*
const fs = require('fs')

fs.readFile('./package.json', 'utf-8', (err, data) => {
    if (err) {
        console.log('hubo un error wey!')
        throw new Error('hubo un error wey' + err)
    }
    console.log('la lectura fue exitosa')

    const info = {
        contenidoStr: data,
        contenidoObj: JSON.parse(data),
        size: data.length
    }

    console.log(info)
    
    fs.writeFile('./info.txt', JSON.stringify(info, null, 2), err => {
        if (err) {
        console.log('hubo un error en la escritura')
        throw new Error('hubo un error en la escritura' + err)
        }
        console.log('la escriutura fue exitosa')
    })
})

*/

// el "try" y el "catch" lo usamos para la manera sincronica

// el "if" y el "else" lo usamos para la manera sincronica

//el "await" se usa solamante cuando tenemos funciones "async"


                                //segundo ejercicio de la clase
/*
const fs = require('fs')
fs.promises.readFile('./info.txt', 'utf-8')
    .then(data => {
        const info =JSON.parse(data)
        console.log(info)
        
        const pkgObj = info.contenidoObj

        pkgObj.author = 'CoderHouse'

        fs.promises.writeFile('./packege.json.coder', JSON.stringify(pkgObj, null, 2))
           .then(() =>{
            console.log('exitosa!')
           })
           .catch(err => {
            console.log('error!')
           })
    })
    .catch(err => console.log('error!!!'))

    */



//Entrega

const fs = require('fs')

try{
        fs.writeFileSync('productos.txt',)
    } catch (err) {
        throw new Error('Error en la escritura'+ err)
    }


    let usuario 
        constructor(title, price, thumbnail, id) => {
            this.title = title      
            this.price = price 
            this.thumbnail = thumbnail      
            this.id = id      
        }
     save (usuario) {
        try{
            let data = fs.readFile('./Productos.txt', 'utf-8')
                if( data == 0 ){
                     let id = 1
                     fs.writeFile('./Productos.txt', JSON.stringify({ id, title, price }))
                     console.log("agregue un objeto nuevo porque no habia nada")
                    }else{
                        let data = JSON.parse( fs.readFile( './Productos.txt', 'utf-8' ) )
                        let id = data.id + 1
                        fs.appendFile('./Productos.txt', JSON.stringify({ id, title, price }))
                        console.log("Ya tenia algo, agregue un producto nuevo")
                    }
                } catch(err){
                    throw new Error(`Error en la escritura del archivo: ` + err)
            }
    }
}

/*
class productos {
    constructor(title, price, thumbnail, id){
        this.title = title      
        this.price = price 
        this.thumbnail = thumbnail      
        this.id = id      
    }
}
 save productos( title, price ) 
    try{
        let data = fs.readFile('./Productos.txt', 'utf-8')
            if( data == 0 ){
                 let id = 1
                 fs.writeFile('./Productos.txt', JSON.stringify({ id, title, price }))
                 console.log("agregue un objeto nuevo porque no habia nada")
                }else{
                    let data = JSON.parse( fs.readFile( './Productos.txt', 'utf-8' ) )
                    let id = data.id + 1
                    fs.appendFile('./Productos.txt', JSON.stringify({ id, title, price }))
                    console.log("Ya tenia algo, agregue un producto nuevo")
                }
            } catch(err){
                throw new Error(`Error en la escritura del archivo: ` + err)
        }
    
*/
