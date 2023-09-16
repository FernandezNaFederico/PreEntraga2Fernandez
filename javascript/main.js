
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
function finalizarCompra() {
    Swal.fire({
        icon: 'success',
        text: '¡Gracias por tu compra!',
    })
    carrito.length = 0;
    actualizarCarrito();
}


let titulo = document.getElementById("titulo");

class Encabezado {
    constructor(logo, titulo) {
        this.logo = logo;
        this.titulo = titulo;
    }

    crearElemento() {
        let div = document.createElement("div");
        div.className = "titulo";
        div.innerHTML = `
            <img src=${this.logo}>
            <h1>${this.titulo}</h1>
        `;
        return div;
    }
}

const encabezadoDatos = [
    { logo: "./imagenes/logoburger.png", titulo: "Lluvia de Hamburguesas" },
];

encabezadoDatos.forEach((datos) => {
    const encabezado = new Encabezado(datos.logo, datos.titulo);
    const encabezadoElemento = encabezado.crearElemento();
    titulo.append(encabezadoElemento);
});

let contenedor = document.getElementById("contenedor");

const carrito = [];

fetch("../json/data.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((productos) => {
            let div = document.createElement("div");
            div.className = "xd";
            div.innerHTML = `
            <img src=${productos.imagen}>
            <h2> ${productos.nombre}</h2>
            <p>Ingredientes: ${productos.ingredientes}</p>
            <span>$${productos.precio}</span>
            <button class="agregar-carrito boton-carrito" data-producto='${JSON.stringify(productos)}'>Agregar al Carrito</button>
            `;
        
            contenedor.append(div);
        })
    })

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

if (localStorage.getItem("carrito")) {
    carrito.push(...JSON.parse(localStorage.getItem("carrito")));
    actualizarCarrito();
}

const comprarBoton = document.getElementById("comprar");
comprarBoton.addEventListener("click", finalizarCompra);





