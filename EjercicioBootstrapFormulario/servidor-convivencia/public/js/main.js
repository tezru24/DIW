function onSubmit( form ){
    
    var data = JSON.stringify( $(form).serializeArray() ); //  <-----------
    console.log( data );
    return false; //don't submit
}
function MarcarLeve(){
    document.getElementById('leve').checked = 1;
}
function inicio() {
  var date = new Date();

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  var today = year + "-" + month + "-" + day;       
  document.getElementById('fecha').value = today;
  document.getElementById('fechaIncidente').value = today;
  document.getElementById('d2').value = today;
  document.getElementById('margen2').value = today;
  document.getElementById('margen3').value = today;
  document.getElementById('d5').value = today;
  document.getElementById('d6').value = today;

  MarcarLeve();
}
function CambiarLeve(){
  document.getElementById("tipificacion-Grave").classList.remove("PonerGrave");
  document.getElementById("seleccionGrave").classList.remove("PonerGrave");
  document.getElementById("tipificacion-Grave").classList.add("QuitarGrave");
  document.getElementById("seleccionGrave").classList.add("QuitarGrave");
  document.getElementById("seleccionLeve").classList.add("PonerLeve");
  document.getElementById("tipificacion-Leve").classList.add("PonerLeve");
  document.getElementById("seleccionLeve").classList.remove("QuitarLeve");
  document.getElementById("tipificacion-Leve").classList.remove("QuitarLeve");


  
}
function CambiarGrave(){
  document.getElementById("seleccionLeve").classList.add("QuitarLeve");
  document.getElementById("tipificacion-Leve").classList.add("QuitarLeve");
  document.getElementById("seleccionLeve").classList.remove("PonerLeve");
  document.getElementById("tipificacion-Leve").classList.remove("PonerLeve");
  document.getElementById("tipificacion-Grave").classList.remove("QuitarGrave");
  document.getElementById("seleccionGrave").classList.remove("QuitarGrave");
  document.getElementById("tipificacion-Grave").classList.add("PonerGrave");
  document.getElementById("seleccionGrave").classList.add("PonerGrave");

  
  
}
function CambiarNombreGrave(){
  if(document.getElementById("grave").checked){
    
    document.getElementById("leve").checked = 0;
    document.getElementById("grave").name = "grave";
  }
}
function CambiarNombreLeve(){
  if(document.getElementById("leve").checked){
    document.getElementById("grave").checked = 0;
    document.getElementById("leve").name = "leve";
  }
 
}
function AccederOtraPagina(){
  document.getElementById("botonEnviar").href = "http://localhost:3000/menus-listar.html"
}