let titulo = document.getElementById("titulo");

const encabezado = [
    {logo:"./imagenes/logoburger.png",titulo:"Lluvia de Hamburguesas"},
];

encabezado.forEach((item)=> {
    let divs = document.createElement("div");
    divs.className = "titulo";
    divs.innerHTML = `
    <img src=${item.logo}>
    <h1>${item.titulo}</h1>
    `;
    titulo.append(divs);
})

let contenedor = document.getElementById("contenedor");

const carrito = [];

const productos = [
{imagen:"./imagenes/BurgerC.jpg", nombre:"Flint Loco", ingredientes: "Medallon de carne, cebolla, cheddar, bacon, muzzarella, pan con semillas",precio: 2500},
{imagen:"./imagenes/BurgerP.jpg", nombre: "Baby Brent", ingredientes: "Medallon de pollo, tomate, lechuga, pan con semillas", precio: 2000},
{imagen:"./imagenes/BurgerS.jpg", nombre: "Steve", ingredientes: "Medallon de soja, tomate, lechuga, pan de papa", precio: 1500},
{imagen:"./imagenes/BurgerQ.jpg", nombre: "Chispas", ingredientes: "Medallon de carne, queso, pan de papa", precio: 1000},
];

productos.forEach((item) => {
    let div = document.createElement("div");
    div.className = "xd";
    div.innerHTML = `
    <img src=${item.imagen}>
    <h2> ${item.nombre}</h2>
    <p>Ingredientes: ${item.ingredientes}</p>
    <span>$${item.precio}</span>
    <button class="agregar-carrito boton-carrito" data-producto='${JSON.stringify(item)}'>Agregar al Carrito</button>
    `;

    contenedor.append(div);
});

document.getElementById("vaciar-carrito").classList.add("boton-vaciar-carrito");

document.getElementById("vaciar-carrito").addEventListener("click", () => {
    carrito.length = 0;
    actualizarCarrito();
});

contenedor.addEventListener("click", (e) => {
    if (e.target.classList.contains("agregar-carrito")) {
        const productoSeleccionado = JSON.parse(e.target.getAttribute("data-producto"));
        carrito.push(productoSeleccionado);
        actualizarCarrito();
    }
});

function actualizarCarrito() {
    const carritoContainer = document.getElementById("carrito");
    carritoContainer.innerHTML = "";
    let total = 0;

    if (carrito.length === 0) {
    carritoContainer.innerHTML = "<p>El carrito está vacío.</p>";
    } else {
    carrito.forEach((item) => {
        total += item.precio;
        carritoContainer.innerHTML += `
        <div class="carrito-item">
            <p>${item.nombre} - $${item.precio}</p>
            <button class="eliminar-del-carrito boton-eliminar" data-nombre='${item.nombre}'>Eliminar</button>
        </div>
        `;
    });
    carritoContainer.innerHTML += `<p>Total: $${total.toFixed(2)}</p>`;
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));

    const eliminarBotones = document.querySelectorAll(".eliminar-del-carrito");

    eliminarBotones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        const nombreProducto = e.target.getAttribute("data-nombre");
        const index = carrito.findIndex((item) => item.nombre === nombreProducto);
        if (index !== -1) {
        carrito.splice(index, 1);
        actualizarCarrito();
        }
    });
    });
}

if (localStorage.getItem("carrito")) {
    carrito.push(...JSON.parse(localStorage.getItem("carrito")));
}