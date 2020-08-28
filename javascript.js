var letras = ['T', 'R', 'W', 'I', 'U', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'A', 'O'];

var control;

while (!control){
var ingresaNum = prompt('Por favor ingresar un numero entre 0 y 25');


    
if ((ingresaNum>25) || (ingresaNum<0)) {
    
    control = false;
    alert ("El numero ingresado es incorrecto");


} else {

    control = true;

    var ingresaLetra = prompt('Por favor ingresar una Letra');
    ingresaLetra = ingresaLetra.toUpperCase();

    var calculaLetra = letras[ingresaNum];

if (calculaLetra == ingresaLetra) {

    document.write("Tu letra: "+ ingresaLetra + "<br>Coincide con: "+ calculaLetra +"<br>Has ganado!");
} else {

    document.write("Tu letra: "+ ingresaLetra + "<br>No coincide con: "+ calculaLetra +"<br>Has Perdido!");
    
}


var myDiv = document.getElementById("myId").style.fontSize = "xx-large";
document.getElementById("myId").style.backgroundColor = '#84c3be';
document.getElementById("myId").style.borderRadius = "0 20px";
document.getElementById("myId").style.fontWeight = "900";
document.getElementById("myId").style.padding = "10px";



}
}


