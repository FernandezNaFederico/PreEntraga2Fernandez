//Funciones
function saludar(){
    if (nombre != "" && apellido != ""){
        alert ( `Bienbenido  ${nombre}  ${apellido}`);
    } else {
        alert ("Nombre y apellido requerido");
    }
}

function preocupacion(){
    if (animo != "bien"){
        alert ("Espero que se mejore");
    } else {
        alert("Me alegro");
    }
}

function eleccion () {
    if (decicion != "armar hamburguesa"){
        class Producto {
            constructor(nombre, ingredientes, precio) {
            this.nombre = nombre;
            this.ingredientes = ingredientes;
            this.precio = precio;
            this.vendido = false;
            }
            vender() {
            this.vendido = true;
            }
            }
            const productos = [];


            productos.push(new Producto("flint loco","Medallon de Carne, Cebolla Caramelizada, Bacon, Cheddar, Tomates Asados,Barbacoa, Salsa Golf",2500));
            productos.push(new Producto("beby brent","Medallon de Pollo, Tomate, Lechuga, Queso Provolone, Mayonesa, Salsa Cheddar",
            2300));
            productos.push(new Producto("steve","Medallon de Soja, Queso Azul, Muzzarella, Tomate Cherry, Albaca, Queso Parmesano", 2000));

            let hamburguesa = prompt("Ingrese el nombre de la hamburguesa").toLowerCase();

            while (hamburguesa != "no") {
            
            let producto;

            
            for (const item of productos) {
            if (item.nombre === hamburguesa) {
                producto = item;
            }
            }

            if (producto) {
            let mensaje = `
                Nombre: ${producto.nombre}
                Ingredientes: ${producto.ingredientes}
                Precio: $${producto.precio}
            `;

            alert(mensaje);
            } else {
            alert("Hamburguesa no encontrada");
            }
        
            hamburguesa = prompt("Para agregar otra ingrase el nombre de la hamburguesa o si no quiere agregar ingrese no");
        }
        



    } else {
        const paty = [
            {medallon: "carne", precio: 500},
            {medallon: "pollo", precio: 400},
            {medallon: "soja", precio: 300},
        ];

        let medallones = prompt("Le gustaria una hamburguesa de carne, pollo o de soja ?").toLowerCase();
        
        while (medallones != "no") {
            const patys = paty.find((item) => item.medallon === medallones);
        
            if (patys) {
            let message = `
            Nombre: ${patys.medallon}
            Precio: $${patys.precio}
            `;

            alert(message);
            } else {
            alert("Ingradiente no identificado");
            }

            medallones = prompt("Le gustaria agregar otro medallon de carne, pollo o de soja ?").toLowerCase();
            }

        const savor = [
            {ingrediente: "tomate", precio: 70},
            {ingrediente: "lechuga", precio: 50},
            {ingrediente: "cebolla", precio: 60},
            {ingrediente: "bacon", precio: 150},
            {ingrediente: "cheddar", precio: 120},
            {ingrediente: "queso azul", precio: 170},
        ];
        
        
        let contenido = prompt("Elija un ingrediente: tomate, lechuga, cebolla, bacon, cheddar, queso azul").toLowerCase();
        
        while (contenido != "listo") {
            const savores = savor.find((item) => item.ingrediente === contenido);
        
            if (savores) {
            let sms = `
            Nombre: ${savores.ingrediente}
            Precio: $${savores.precio}
            `;
        
            alert(sms);
            } else {
            alert("Ingradiente no identificado");
            }
        
            contenido = prompt("Elija otro ingrediente: tomate, lechuga, cebolla, bacon, cheddar, queso azul o si ya esta listo ponga listo").toLowerCase();
        }

        let pan = prompt("Elije tu Pan: Pan de papa, Pan de queso, Pan casero, Pan de semilla");

        if (pan = "Pan de papa") {
            alert("Buena eleccion");
        } else if (pan = "Pan de queso") {
            alert("Sos de los mios");
        } else if (pan = "Pan casero") {
            alert("Excelente");
        } else {
            alert("Buenisima Eleccion");
        }

        let aderesos = prompt ("Elija sus aderesos: Barbacoa, Mayonesa, Ketchup, Salsa Cheddar, Salsa Golf").toLowerCase();
        
        while ( aderesos != "listo") {
            alert ("Genial");
            aderesos = prompt("Elija otro aderesos: Barbacoa, Mayonesa, Ketchup, Salsa Cheddar, Salsa Golf o si ya esta listo ponga listo");
        }
        alert ("Fantastico, su pedido se a realizado");
    }
}


// ALGORITMOS

let nombre = prompt("Ingrese su nombre").toLowerCase();
let apellido = prompt( "Ingrese su apellido" ).toLowerCase();

saludar();

let animo = prompt( `Como esta ${nombre}?`).toLowerCase();

preocupacion();

let decicion = prompt("Le gustaria armar su hamburguesa o una hamburguesa del menu ?").toLowerCase();

eleccion();

for(let pedido = 1; pedido <= 25; pedido ++) {
    let nombret = prompt ("Ingrese su nombre nuevamente para finalizar").toLowerCase();
    alert(`${nombret} tu pedido es el ${pedido}`);
    let continuar = prompt("Desea realizar otro pedido?").toLowerCase();
    if (continuar != "si"){
        break;
    } else {
        decicion = prompt("Le gustaria armar su hamburguesa o una hamburguesa del menu ?").toLowerCase();
        eleccion();
    }
}


