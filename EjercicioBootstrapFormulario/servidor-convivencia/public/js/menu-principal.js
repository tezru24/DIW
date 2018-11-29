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