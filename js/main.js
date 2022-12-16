// ENTRADA DE DATOS
const productos = [
    {id:1, nombre:"Crear pagina web", precio:400, stock:10},
    {id:2, nombre:"Mantenimiento de pagina", precio:380, stock:10},
    {id:3, nombre:"Diseño Responsive", precio:300, stock:10},
    {id:4, nombre:"Seo", precio:320, stock:10}
]; 
//Defino mi Array de Productos del Catálogo
const productos_carrito = []; //Defino mi Array de Productos del Carrito

// Defino la Clase Producto
class Producto {
    constructor (id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.iva = 21;
    }
    aplicarIVA() {
        this.precio = this.precio + ((this.precio * this.iva) / 100);
    }
}
// Declaro la función Buscar Producto
function buscarProducto(id) {
    return (productos.find(item => item.id === id) || null); // Devuelve un Objeto
}
// Declaro la función Agregar Producto al Carrito
function agregarProducto(producto) {
    productos_carrito.push(producto);
}
// Declaro la función Eliminar Producto del Carrito
function eliminarProducto(id) {
    let pos = productos_carrito.findIndex(item => item.id === id);
    if (pos > -1) {
        productos_carrito.splice(pos, 1);
    }
}
// Recorro los Productos del Catálogo
function recorrerProductos() {
    let contenido_productos = "";
    for (let producto of productos) {
        contenido_productos += producto.id + "- " + producto.nombre + " $" + producto.precio + "\n";
    }
    return contenido_productos;
}
// Recorro los Productos del Carrito
function recorrerProductosCarrito() {
    let contenido_productos = "";
    for (let producto of productos_carrito) {
        contenido_productos += producto.id + "- " + producto.nombre + " $" + producto.precio + "\n";
    }
    return contenido_productos;
}
// Realizo la carga de Productos de Catálogo
let cargarProducto = true;
// Realizo la carga de Productos en el Carrito
cargarProducto = true;

while (cargarProducto) {
    let contenido_productos = recorrerProductos();

    // Indico el ID del Producto
    let id_producto = parseInt(prompt("Seleccione el Producto a agregar al Carrito:\n\n" + contenido_productos))
    // Buscar el Producto
    let producto = buscarProducto(id_producto);
    // Verifico si el Producto seleccionado es válido
    if (producto != null) {
        // Agregar el Producto seleccionado al Carrito
        agregarProducto(producto);
    } else {
        alert("No existe el Producto con el ID: " + id_producto + "!");
    }
    // Pregunto si deseo continuar cargando Productos al Carrito
    cargarProducto = confirm("Desea agregar otro Producto al Carrito?");
}
// Realizo la eliminación de Productos que no deseo que estén en el Carrito
cargarProducto = true;

while (cargarProducto) {
    let contenido_productos = recorrerProductosCarrito();

    // Indico el ID del Producto
    let id_producto = parseInt(prompt("Seleccione el Producto que desee eliminar del Carrito: (0 - Salir)\n\n" + contenido_productos));

    // Valido si existe el ID del Producto
    if (id_producto > 0) {
        //Eliminar el Producto del Carrito
        eliminarProducto(id_producto);
    } else {
        alert("No existe el Producto con el ID: " + id_producto + "!");
    }
    
    // Pregunto si deseo continuar cargando Productos al Carrito
    cargarProducto = confirm("Desea eliminar otro Producto del Carrito?");
}
// Imprimo el total de Productos de mi Carrito
let suma_total = 0;
let contenido_productos = "";

for (let prod of productos_carrito) {
    // Creo una nueva instancia de la Clase Producto
    let producto = new Producto(prod.id, prod.nombre, prod.precio, prod.stock);
    producto.aplicarIVA(); // Aplico el método Calcular IVA
    contenido_productos += producto.id + "- " + producto.nombre + " $" + producto.precio + "\n";
    suma_total += producto.precio; // Sumo al Contador "Suma Total" el valor precio del producto
}
// Muestro el Total a Pagar
alert("Productos Seleccionados:\n\n" + contenido_productos + "\n\nTotal a Pagar: $" + suma_total);