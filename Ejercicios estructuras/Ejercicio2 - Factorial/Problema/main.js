var n=parseInt(prompt("Ingrese el número del factorial a conocer"))
var factorial=1
var cadena=""
for(var i=n;i>0;i--){
	factorial=factorial*i
	cadena+=i+"x"
}
alert("El factorial de "+n+"! es "+cadena+" = "+factorial)//sale 3x2x1x =6



