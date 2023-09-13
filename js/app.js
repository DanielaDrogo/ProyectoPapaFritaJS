// Crear una clase producto
class Producto {
    // Definir un método constructor
    constructor(imagen, nombre, precio) {
      // Inicializar las propiedades del producto
      this.imagen = imagen;
      this.nombre = nombre;
      this.precio = precio;
    }
}
  
  // Crear una instancia de la clase producto para cada producto
  let papasGrandes = new Producto("./imagenes/Papafritas-grandes.jpg", "Papas fritas paquete grande", 600);
  let papasMedianas = new Producto("./imagenes/Papafritas-medianas.jpg", "Papas fritas paquete mediano", 400);
  let papasChicas = new Producto("./imagenes/Papafritas-chicas.jpg", "Papas fritas paquete chico", 200);
  let chipsGrandes = new Producto("./imagenes/lays_clasicas.png", "papas chips grandes", 200);
  let chipsMedianas = new Producto("./imagenes/lays_clasicas.png", "papas chips Medianas", 150);
  let chipsChicas = new Producto("./imagenes/lays_clasicas.png", "papas chips chicas", 100);
  let salchipapa = new Producto("./imagenes/Salchipapa.jpg", "Salchipapa", 1000);
  let tortilla = new Producto("./imagenes/tortilla-de-papa.jpg", "Tortilla de papas", 1000);
  let 
  
  // Crear un array con todos los productos
  let productos = [papasGrandes, papasMedianas, papasChicas, chipsGrandes, chipsMedianas, chipsChicas, salchipapa, tortilla];
  
  // Crear una función que reciba un objeto producto y cree un elemento div con sus datos
  function crearDivProducto(producto) {
    // Crear un elemento div
    let div = document.createElement("div");
    // Asignar la clase producto al div
    div.className = "producto";
    // Crear un elemento img para la imagen del producto
    let img = document.createElement("img");
    // Asignar la clase imagen_producto a la img
    img.className = "imagen_producto";
    // Asignar el atributo src a la img con el valor de la imagen del producto
    img.src = producto.imagen;
    // Asignar el atributo alt a la img con el valor del nombre del producto
    img.alt = producto.nombre;
    // Crear un elemento prod para el nombre del producto
    let prodNombre = document.createElement("prod");
    // Asignar el texto del prod con el valor del nombre del producto
    prodNombre.textContent = producto.nombre;
    // Crear un elemento prod para el precio del producto
    let prodPrecio = document.createElement("prod");
    // Asignar el texto del prod con el valor del precio del producto
    prodPrecio.textContent = "$" + producto.precio;
  }







  function agregarProductoAlCarrito(producto) {
    // Convertir el producto a una cadena JSON
    let productoJSON = JSON.stringify(producto);
    // Guardar el producto con una clave única basada en su id
    localStorage.setItem(`producto-${producto.id}`, productoJSON);
  }

  function mostrarCarrito() {
    // Obtener el elemento del modal donde se mostrarán los productos
    let modalBody = document.querySelector(".modal-body");
    // Vaciar el contenido del modal
    modalBody.innerHTML = "";
    // Recorrer todas las claves del localStorage
    for (let i = 0; i < localStorage.length; i++) {
      // Obtener la clave actual
      let clave = localStorage.key(i);
      // Comprobar si la clave empieza por "producto-"
      if (clave.startsWith("producto-")) {
        // Obtener el producto por su clave
        let productoJSON = localStorage.getItem(clave);
        // Convertir el producto a un objeto JavaScript
        let producto = JSON.parse(productoJSON);
        // Crear un elemento HTML para mostrar el producto
        let elementoProducto = document.createElement("div");
        elementoProducto.classList.add("producto");
        elementoProducto.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <h5>${producto.nombre}</h5>
          <p>${producto.precio} pesos</p>
          <button class="btn btn-danger" onclick="eliminarProductoDelCarrito(${producto.id})">Eliminar</button>
        `;
        // Añadir el elemento al modal
        modalBody.appendChild(elementoProducto);
      }
    }
  }
  




//INICIO DE SESION ~
/*let usuario = ""
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

}*/
//*-----------------*


//SELECCIONADOR DE PRODUCTOS ~                  
/*const papasBaston = {
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



const carrito = []
renderizarProductos(productos)
renderizarCarrito(carrito)




//funciones ~~
function renderizarProductos(listaProducto){
}

function renderizarCarrito(listaProducto){
    const contenedor_producto = document.getElementById("contenedor_productos")
    contenedor_producto.innerHTML = ""

    arreglo.forEach(producto => {

        contenedor_producto.innerHTML +=    `<div class="producto">
                                                <img class=${producto.imagen} src="${producto.imagen}" alt="PapaFritaGrande">
                                                <h3>Papas fritas <br> paquete grande</h3>
                                                <h3>$600</h3>
                                                <buttom id="ap-${producto.id}">agregar carrito</buttom>
                                            </div>`

        
    });

    listaProducto.forEach(producto =>{
        const btn_agregarCarrito = document.getElementById(`ap-${producto.id}`)

        btn_agregarCarrito.addEventListener("click", ()=>{
            carrito.push(producto)

        })


    })

}



function renderizarCarrito(productos){
}

function renderizarCarrito(listaCarrito){
    const contenedor_producto = document.getElementById("contenedor_carrito")
    contenedor_producto.innerHTML = []

    arreglo.forEach(producto => {

        contenedor_producto.innerHTML +=    `<div class="producto">
                                                <img class=${producto.imagen} src="${producto.imagen}" alt="PapaFritaGrande">
                                                <h3>Papas fritas <br> paquete grande</h3>
                                                <h3>$600</h3>
                                                <buttom id="ep-${producto.id}">eliminar</buttom>
                                            </div>`

        
    });

    listaproducto.forEach(producto =>{
        const btn_eliminar = document.getElementById(`ap-${producto.id}`)

        btn_eliminar.addEventListener("click", ()=>{
            let indice = buscarIndice(producto)
            carrito.slice(indice,1)

        })


    })

}





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
}*/





