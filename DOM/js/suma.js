function suma(a,b){
    return a+b;
}
//FORMA 1
/* document.getElementById('boton_suma').addEventListener("click", function(){
    let a=parseInt(document.getElementById("numero1").value);
    let b=parseInt(document.getElementById("numero2").value);
    let resultado=suma(a,b);
    console.log(resultado);
    document.getElementById('resultado').innerHTML= resultado;
    document.getElementById('contenedorResultado').style.display="block";
    document.getElementById('contenedorResultado').style.color="white";
})
 */

/**
 *  FORMA 2
 *  Validar con javascript en vez de HTML con required (ya que solo sirve para forms este)
 */

function validar() {
    let a = document.getElementById("numero1").value;
    let b = document.getElementById("numero2").value;
  if ((a == "") || (b == "")){
    alert("Debes llenar el campo")
    return false
  }else{
    let resultado=suma(parseInt(a),parseInt(b));
    console.log(resultado);
    document.getElementById('resultado').innerHTML= resultado;
    document.getElementById('contenedorResultado').style.display="block";
    document.getElementById('contenedorResultado').style.color="white";
  }
}