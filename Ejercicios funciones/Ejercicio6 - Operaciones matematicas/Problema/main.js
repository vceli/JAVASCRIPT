function operacion(operation,a,b){
	switch(operation){
		case "suma":
			return a+b//puede no ir un return?
			break
		case "resta":
			return a-b
			break
		case "multiplicacion" || "multiplicación":
			return a*b
			break
		case "division" || "división":
			return a/b
			break
		default:
			return "Operación no definida"
	}

}
var a=parseInt(prompt("Ingrese el 1er número"))
var b=parseInt(prompt("Ingrese el 2do número"))
var operation=(prompt("Operación que desea realizar")).toLowerCase()
alert("La "+operation+" de "+a+" y "+b+" es"+" "+operacion(operation,a,b))