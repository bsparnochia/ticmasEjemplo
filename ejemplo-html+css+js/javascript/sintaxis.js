/* document.getElementById("boton").onclick= function(){
    console.log("Efectuando cambio en el elemento demo");
    document.getElementById("demo").innerHTML = "Texto cambiado by brian"
}
 */
document.getElementById("boton").addEventListener('click', function(){
    document.getElementById("demo").innerHTML = "Texto cambiado by brian";
})

document.getElementById("boton_color").addEventListener('click', function(){
    console.log("cambiando color de fondo");
    document.body.style.backgroundColor='#2980B9';
})

document.getElementById("boton").addEventListener('click', function(){
    document.getElementById("demo").innerHTML = "Texto cambiado by brian";
})

document.getElementById("boton_ocultar").addEventListener('click', function(){
    document.getElementById("demo").style.display = "none"
})
