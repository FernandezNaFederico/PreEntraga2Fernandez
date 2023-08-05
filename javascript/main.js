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

function medallon(){
    if (pregunta = "carne") {
        alert("Buena eleccion");
    } else if (pregunta = "pollo") {
        alert("Buena eleccion");
    } else {
        alert("Buena eleccion");
    }
}

function savor(){
    while ( ingredientes != "listo") {
        alert ("Genial");
        ingredientes = prompt("Elija otro ingrediente: Tomate, Lechuga, Cebolla, Bacon, Cheddar, Queso Azul o si ya esta listo ponga listo");
    }
}

function masa(){
    if (pan = "Pan de papa") {
        alert("Buena eleccion");
    } else if (pan = "Pan de queso") {
        alert("Buena eleccion");
    } else if (pan = "Pan casero") {
        alert("Buena eleccion");
    } else {
        alert("Buena eleccion");
    }
}

function condimento(){
    while ( aderesos != "listo") {
        alert ("Genial");
        aderesos = prompt("Elija otro aderesos: Barbacoa, Mayonesa, Ketchup, Salsa Cheddar, Salsa Golf o si ya esta listo ponga listo");
    }
    alert ("Fantastico, su pedido se a realizado");
}

// ALGORITMOS

let nombre = prompt("Ingrese su nombre");
let apellido = prompt( "Ingrese su apellido" );

saludar();

let animo = prompt( `Como esta ${nombre}?`);

preocupacion();

let pregunta = prompt("Le gustaria una hamburguesa de carne, pollo o de soja ?");

medallon();

let ingredientes = prompt("Elija un ingrediente: Tomate, Lechuga, Cebolla, Bacon, Cheddar, Queso Azul");

savor();

let pan = prompt("Elije tu Pan: Pan de papa, Pan de queso, Pan casero, Pan de semilla");

masa();

let aderesos = prompt ("Elija sus aderesos: Barbacoa, Mayonesa, Ketchup, Salsa Cheddar, Salsa Golf");

condimento();

for(let pedido = 1; pedido <= 25; pedido ++) {
    let nombret = prompt ("Ingrese su nombre nuevamente para finalizar");
    alert(`${nombret} tu pedido es el ${pedido}`);
    let continuar = prompt("Desea realizar otro pedido?");
    if (continuar != "si"){
        break;
    } else {
        pregunta = prompt("Le gustaria una hamburguesa de carne, pollo o de soja ?");
        medallon();
        ingredientes = prompt("Elija un ingrediente: Tomate, Lechuga, Cebolla, Bacon, Cheddar, Queso Azul");
        savor();
        pan = prompt("Elije tu Pan: Pan de papa, Pan de queso, Pan casero, Pan de semilla");
        masa();
        aderesos = prompt ("Elija sus aderesos: Barbacoa, Mayonesa, Ketchup, Salsa Cheddar, Salsa Golf");
        condimento();
    }
}
