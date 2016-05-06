var factura={
	"empresa":{nombre: "Carsa",
				direccion:"Av. Arequipa",
				telefono:2324543,
				NIF:"A26003921"},
	"cliente":{nombre: "Carsa",
				direccion:"Av. Arequipa",
				telefono:2324543,
				DNI:"A26003921"},
	"articulo":{ descripcion:"",
				 precio:0,
				 cantidad:0},
	"importeTotal":0,
	"tipoIva":0,
	"formaPago":""
}
/********************************/
var f = {}

f.empresa = {}

// empresa
var nombre = prompt("Ingrese el nombre de la empresa");
var direccion = prompt("Ingrese la direccion de la empresa");

f.empresa.nombre = nombre
f.empresa.direccion = direccion

f.cliente = {}

// cliente
var nombreCliente = prompt("Nombre del cliente")
f.cliente.nombre = nombreCliente;

// articulo


// importe total
var importeTotal;
f.importeTotal = importeTotal;








//++++++++++++++++++++++++++++++++++++++++++++++
// var factura = {
//   empresa: {
//     nombre:    "Nombre de la empresa",
//     direccion: "Dirección de la empresa",
//     telefono:  "900900900",
//     nif:       ""
//   },
//   cliente: {
//     nombre:    "Nombre del cliente",
//     direccion: "Dirección del cliente",
//     telefono:  "600600600",
//     nif:       "XXXXXXXXX"
//   },
//   elementos: [
//     { descripcion: "Producto 1", cantidad: 0, precio: 0 },
//     { descripcion: "Producto 2", cantidad: 0, precio: 0 },
//     { descripcion: "Producto 3", cantidad: 0, precio: 0 }
//   ],
//   informacion: {
//     baseImponible:  0,
//     iva:            16,
//     total:          0,
//     formaPago:      "contado"
//   }
// };
 
// // Métodos de cálculo del total y de visualización del total
// factura.calculaTotal = function() {
//   for(var i=0; i<this.elementos.length; i++) {
//     this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio;
//   }
//   var importeIva = (1 + (this.informacion.iva/100));
//   this.informacion.total = (this.informacion.baseImponible * importeIva).toFixed(2);
// }
 
// factura.muestraTotal = function() {
//   this.calculaTotal();
//   alert("TOTAL = " + this.informacion.total + " euros");
// }
 
// factura.muestraTotal();