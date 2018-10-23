function onSubmit( form ){
    
    var data = JSON.stringify( $(form).serializeArray() ); //  <-----------
    console.log( data );
    return false; //don't submit
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
  document.getElementById('fecha-incidente').value = today;
  document.getElementById('d2').value = today;
  document.getElementById('margen2').value = today;
  document.getElementById('margen3').value = today;
  document.getElementById('d5').value = today;
  document.getElementById('d6').value = today;
}
function EliminarDiv(){
  document.getElementById('seleccionLeve').style.display = document.getElementById("leve").checked ? "block": "none";
  document.getElementById('seleccionGrave').style.display = document.getElementById("grave").checked ? "block": "none";
}
function MarcarLeve(){
  document.getElementById('leve').checked = 1;
}
function Resetear(){
  document.getElementById('formulario').reset();
  EliminarDiv();
}