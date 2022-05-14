"use strict";
class Consola {
  constructor(fabricante, consola, precio, cantidad) {
    this.fabricante = fabricante;
    this.consola = consola;
    this.precio = parseFloat(precio);
    this.cantidad = parseFloat(cantidad);
  }

ventaTotal(){
    return this.precio * this.cantidad;
}

 
}

var arrayConsolas = [];

do {
  var comprobacion = prompt(
    "¿Que fabricante deseas? Microsoft, Nintento, Sony. Ingresa salir para terminar"
  );
  if (comprobacion === "salir") {
    break;
  } else {
    var fabricanteC = comprobacion;
    var consolaC = prompt("¿Que consola deseas?");
    var cantidadC = parseFloat(prompt("¿Cuantas consolas llevaras?", 0));
    var precioC = parseFloat(prompt("¿Cuanto cuesta la consola?", 0));
    arrayConsolas.push(new Consola(fabricanteC, consolaC, precioC, cantidadC));
  }
} while (comprobacion != "salir");

console.log(arrayConsolas);

for (var entrega of arrayConsolas){
    window.alert("Escogiste "+entrega.cantidad+ "consola(s) "+entrega.consola+ "del fabricante"+ entrega.fabricante+ "por el costo $"+ entrega.ventaTotal()+"pesos en total");
    console.log(entrega.cantidad);
    console.log(entrega.consola);
    console.log(entrega.fabricante);
    console.log(entrega.ventaTotal());


    


} 

