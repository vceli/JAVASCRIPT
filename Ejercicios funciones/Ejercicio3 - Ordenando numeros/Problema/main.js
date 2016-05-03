var array=[]
for(var i=0;i<3;i++){
   array.push(parseInt(prompt("Ingrese el número "+(i+1))))
}

function ordenar(array){
	return array.sort(function(a, b){return a-b})

}

alert("Ordenando el "+array+" resulta "+ordenar(array))