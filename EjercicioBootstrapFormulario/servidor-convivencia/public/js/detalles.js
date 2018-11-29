var auxId = location.search.substr(1).split("=")[1];
console.log(auxId);
var Grave;
var Leve;
$.getJSON( "http://localhost:3000/incidencias/"+auxId, function( data ) {
  var items = [];
    $.each( data, function( key, val ) {
  console.log(key);
    items.push( "<li id='" + key + "' class='list-group-item'>"+key+":"+val+"</li>" ) ;
    if(key=="leve"){
      Leve=val;
    }
    if(key=="grave"){
      Grave=val;
    }
  });
  $( "<ul/>", {
    "class": "list-group",
    html: items.join( "" )
  }).appendTo( "#divLista" );
});

function Eliminar(){
  $.ajax ({
    type:"DELETE",
    url: "http://localhost:3000/incidencias/"+auxId,
    data: "",
  });
  
}
function CambiarPag(){
if(Grave=="on"){
document.getElementById("Borrar").href="http://localhost:3000/listar-graves.html";
}
else if(Leve=="on"){
  document.getElementById("Borrar").href="http://localhost:3000/listar-leves.html";
  }
}
function MostrarMenu(){
  if(document.getElementById("menu").style.display == "block"){
      document.getElementById("menu").style.display = "none";
  }else {
      document.getElementById("menu").style.display = "block";
  }
}

function cargar(){
  document.getElementById("imagen-menu").addEventListener("click",MostrarMenu);
}

document.addEventListener("DOMContentLoaded",cargar);