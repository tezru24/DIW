$.getJSON( "http://localhost:3000/incidencias", function( data ) {
  var items = [];
    $.each( data, function( key, val ) {
  console.log(key);
  if(val.leve == "on"){
    items.push( "<a href=detalles.html?id="+val._id+"><li id='" + key + "' class='list-group-item'>" + val.alumno + "</li>"+"</a>" );
  }});
  $( "<ul/>", {
    "class": "list-group",
    html: items.join( "" )
  }).appendTo( "#divLista" );
});
