const { write } = require('fs');
const {readFile, writeFile, appendFile} = require('fs/promises');

class producto {
    constructor(title, price, thumbnail){
        this.title = title      
        this.price = price 
        this.thumbnail = thumbnail      
       
    }
}
class Contenedor{
    

    constructor(_file){
        this.file = _file;
    }


    async getAll(){
       
        try{
    
            const result = await readFile(this.file, 'utf8');         
            const object = JSON.parse(result);
            return object;
    
        }catch(error){
    
        }
           
    }

    async getById(_id){
       
        try{
    
            const result = await readFile(this.file, 'utf8');         
            const object = JSON.parse(result);
            let item = object.find(x => x.id == _id );
            if(!item){
                return null;
            }
            return item;
    
        }catch(error){
    
        }
           
    }

    async Save(_producto){


        try{
    
            const result = await readFile(this.file, 'utf8');         
            const array = JSON.parse(result);
            let lastItem = array[array.length - 1];
            let id = 1;
            if(lastItem){
                                  
                id = lastItem.id + 1; 
                _producto.id = id;
                array.push(_producto); 
                await writeFile(this.file, JSON.stringify(array,null, 2));
                  
            }else{
                _producto.id = id ;
                let arr = [_producto];
                let pJson = JSON.stringify(arr); 
              
                await writeFile(this.file, pJson);

                
            } 

            return id;
    
            
           
    
        }catch(error){
      
         
            return 0;
        }
           
    }


}




let contenedor = new Contenedor('productos.json');
//contenedor.getAll().then(x => console.log(x));

let producto1 = new producto("Air-Force 1",1450,"htttps");
let producto2 = new producto("Air-Force 3",1450,"htttps");
//producto1.id = 1

//console.log(JSON.stringify(producto1));

contenedor.Save(producto1).then(x => console.log(x));
contenedor.Save(producto2).then(x => console.log(x));
//contenedor.getById(2).then(x => console.log(x));
/* const leerArchivo = async()=>{
    
    try{
    
        const result = await readFile('productos.txt', 'utf8')
       console.log(result)

    }catch(error){

    }
    
}

leerArchivo(); */






/* 
const fs = require('fs')


try{
 // Use fs.readFile() method to read the file
fs.readFile('productos.txt', 'utf8', (err, data) => {
      
    // Display the file content
    console.log(data);
}); */

   /*      if( data == 0 ){
             let id = 1
             fs.writeFile('./Productos.txt', JSON.stringify({ id, title, price }))
             console.log("agregue un objeto nuevo porque no habia nada")
            }else{
                let data = JSON.parse( fs.readFile( './Productos.txt', 'utf-8' ) )
                let id = data.id + 1
                fs.appendFile('./Productos.txt', JSON.stringify({ id, title, price }))
                console.log("Ya tenia algo, agregue un producto nuevo")
            } */
    /*     } catch(err){
            throw new Error(`Error en la escritura del archivo: ` + err)
        } */






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
/*
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
*/
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
