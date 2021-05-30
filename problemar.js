function limpiarFormulario() {
document.getElementById("miForm").reset();
}

var peso = function(pe){

var pes  = parseFloat(document.getElementById("masas").value);

var g=9.8

var w= pes*g

    return "El Del Cuerlpo es "+w;
}


var numero = function(a){

var x  = parseFloat(document.getElementById("num").value);

var x2= x*x

var resultado = (4*x2)+(-2*x) 

return  "El resultado es s"+resultado;
}

