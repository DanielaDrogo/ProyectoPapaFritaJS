//INICIO DE SESION ~
let usuario = ""
let contracenia = ""
let ingresoExitoso = false


for(let intentos = 3; ingresoExitoso != true && intentos >= 0; intentos--) {
    let usuario = prompt( "ingrese nombre" )
    let contracenia = Number(prompt( "ingrese contraseña" ))

    if ( ( (usuario == "Sr Cliente") || (usuario == "sr cliente") ) && (contracenia == "1234") ) {
        ingresoExitoso = true
        alert( "bienvenido a la tienda" + " " + usuario)
        
    }else{
        alert( "usuario o contraseña incorrectas \nte quedan" + " " + intentos + " " + "intentos" )
        
    }
    
    if (intentos == 0) {
        alert("superaste el número máximo de intentos. \nInténtalo más tarde.")
        break 
    }

}
//*-----------------*


//SELECCIONADOR DE PRODUCTOS ~                  
const papasBaston = {
    nombre: "papas bastón",
    id: 1,
    tamaños: [
        {
            nombre: "paquete chico",
            id: 4,
            precio: 100
        },
        {
            nombre: "paquete mediano",
            id: 5,
            precio: 300
        },
        {
            nombre: "paquete grande",
            id: 6,
            precio: 500
        }
    ]
  }
  
const papasChips = {
    nombre: "papas chips",
    id: 2,
    tamaños: [
        {
            nombre: "paquete chico",
            id: 7,
            precio: 80
        },
        {   
            nombre: "paquete mediano",
            id: 8,
            precio: 250
        },
        {
            nombre: "paquete grande",
            id: 9,
            precio: 400
        }
    ]
}
  
const papasGrilladas = {
    nombre: "papas grilladas",
    id: 3,
    tamaños: [
        {
            nombre: "paquete chico",
            id: 10,
            precio: 120
        },
        {
            nombre: "paquete mediano",
            id: 11,
            precio: 350
        },
        {
            nombre: "paquete grande",
            id: 12,
            precio: 600
        }
    ]
}
  
const productos = [papasBaston, papasChips, papasGrilladas]
  
let mensaje = "Seleccione el producto que desea comprar:\n\n"
  
for (let i = 0; i < productos.length; i++) {
    mensaje += i + ". " + productos[i].nombre + "\n"
}
  
let indiceProducto = Number(prompt(mensaje))
  
  
let productoSeleccionado = productos[indiceProducto]
  
mensaje = "Seleccione el tamaño que desea comprar:\n\n"
  
for (let i = 0; i < productoSeleccionado.tamaños.length; i++) {
    mensaje += i + ". " + productoSeleccionado.tamaños[i].nombre + " ($" + productoSeleccionado.tamaños[i].precio + ")" + "\n"
}
  
let indiceTamaño = Number(prompt(mensaje))
  
let tamañoSeleccionado = productoSeleccionado.tamaños[indiceTamaño]

   
//CALCULAR TOTAL ~
let total = 0 

agregar(productoSeleccionado, tamañoSeleccionado)

function agregar(producto, tamaño) {
    total += tamaño.precio 
    alert( producto.nombre + " " + tamaño.nombre + " El total es $" + total) 
}


