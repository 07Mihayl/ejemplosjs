function contadorA(cadena,letra){

	for(var i=0, contA=0; i<cadena,letra.length;i++){//parametro
		if(cadena[i]==letra){//accion
			contA++;
		}
	}
	return contA;
}
var cad ="Romero";
var x="x"
console.log("la cantidad de letras , es:" + contadorA(cadx));