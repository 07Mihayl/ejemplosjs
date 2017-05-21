function contadorA(cadena){

	for(var i=0, contA=0; i<cadena.length;i++){//parametro
		if(cadena[i]=="0"){//accion
			contA++;
		}
	}
	return contA;
}
var cad ="Romero";
console.log("la cantidad de letras , es:" + contadorA(cad));