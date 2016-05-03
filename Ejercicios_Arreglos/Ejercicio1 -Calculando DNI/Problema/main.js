var letras=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T']
var numberDni=parseInt(prompt("Ingrese los 8 números de su DNI"))
var letter=prompt("Ingres la letra que corresponde a su DNI")
if(0<numberDni && numberDni<=99999999){
	var letraDni=letras[numberDni%23]
	if(letter.toUpperCase()==letraDni){
		alert("El número y la letra de DNI son correctos")
	}else{
		alert("La letra indicada no es la correcta")
	}

}else{
	alert("El número proporcionado no es válido")
}