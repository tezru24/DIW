

function Ordenar(){
    var s = document.getElementById("selector").value;

    if(s == "Baltasar"){
        document.getElementById("b").style.order = -1;
        document.getElementById("a").style.order = 0;
        document.getElementById("c").style.order = 0;
        document.getElementById("d").style.order = 0;
        document.getElementById("e").style.order = 0;
        document.getElementById("f").style.order = 0;
        document.getElementById("g").style.order = 0;
        document.getElementById("h").style.order = 0;
        document.getElementById("i").style.order = 0;
        document.getElementById("j").style.order = 0;
    }
    if(s == "Angel"){
        document.getElementById("b").style.order = 0;
        document.getElementById("a").style.order = -1;
        document.getElementById("c").style.order = 0;
        document.getElementById("d").style.order = 0;
        document.getElementById("e").style.order = 0;
        document.getElementById("f").style.order = 0;
        document.getElementById("g").style.order = 0;
        document.getElementById("h").style.order = 0;
        document.getElementById("i").style.order = 0;
        document.getElementById("j").style.order = 0;
    }
    if(s == "Carlos"){
        document.getElementById("b").style.order = 0;
        document.getElementById("a").style.order = 0;
        document.getElementById("c").style.order = -1;
        document.getElementById("d").style.order = 0;
        document.getElementById("e").style.order = 0;
        document.getElementById("f").style.order = 0;
        document.getElementById("g").style.order = 0;
        document.getElementById("h").style.order = 0;
        document.getElementById("i").style.order = 0;
        document.getElementById("j").style.order = 0;
    }
    if(s == "David"){
        document.getElementById("b").style.order = 0;
        document.getElementById("a").style.order = 0;
        document.getElementById("c").style.order = 0;
        document.getElementById("d").style.order = -1;
        document.getElementById("e").style.order = 0;
        document.getElementById("f").style.order = 0;
        document.getElementById("g").style.order = 0;
        document.getElementById("h").style.order = 0;
        document.getElementById("i").style.order = 0;
        document.getElementById("j").style.order = 0;
    }
    if(s == "Eulogio"){
        document.getElementById("b").style.order = 0;
        document.getElementById("a").style.order = 0;
        document.getElementById("c").style.order = 0;
        document.getElementById("d").style.order = 0;
        document.getElementById("e").style.order = -1;
        document.getElementById("f").style.order = 0;
        document.getElementById("g").style.order = 0;
        document.getElementById("h").style.order = 0;
        document.getElementById("i").style.order = 0;
        document.getElementById("j").style.order = 0;
    }
    if(s == "Fran"){
        document.getElementById("b").style.order = 0;
        document.getElementById("a").style.order = 0;
        document.getElementById("c").style.order = 0;
        document.getElementById("d").style.order = 0;
        document.getElementById("e").style.order = 0;
        document.getElementById("f").style.order = -1;
        document.getElementById("g").style.order = 0;
        document.getElementById("h").style.order = 0;
        document.getElementById("i").style.order = 0;
        document.getElementById("j").style.order = 0;
    }
    if(s == "Genaro"){
        document.getElementById("b").style.order = 0;
        document.getElementById("a").style.order = 0;
        document.getElementById("c").style.order = 0;
        document.getElementById("d").style.order = 0;
        document.getElementById("e").style.order = 0;
        document.getElementById("f").style.order = 0;
        document.getElementById("g").style.order = -1;
        document.getElementById("h").style.order = 0;
        document.getElementById("i").style.order = 0;
        document.getElementById("j").style.order = 0;
    }
    if(s == "Hector"){
        document.getElementById("b").style.order = 0;
        document.getElementById("a").style.order = 0;
        document.getElementById("c").style.order = 0;
        document.getElementById("d").style.order = 0;
        document.getElementById("e").style.order = 0;
        document.getElementById("f").style.order = 0;
        document.getElementById("g").style.order = 0;
        document.getElementById("h").style.order = -1;
        document.getElementById("i").style.order = 0;
        document.getElementById("j").style.order = 0;
    }
    if(s == "Irene"){
        document.getElementById("b").style.order = 0;
        document.getElementById("a").style.order = 0;
        document.getElementById("c").style.order = 0;
        document.getElementById("d").style.order = 0;
        document.getElementById("e").style.order = 0;
        document.getElementById("f").style.order = 0;
        document.getElementById("g").style.order = 0;
        document.getElementById("h").style.order = 0;
        document.getElementById("i").style.order = -1;
        document.getElementById("j").style.order = 0;
    }
    if(s == "Joan"){
        document.getElementById("b").style.order = 0;
        document.getElementById("a").style.order = 0;
        document.getElementById("c").style.order = 0;
        document.getElementById("d").style.order = 0;
        document.getElementById("e").style.order = 0;
        document.getElementById("f").style.order = 0;
        document.getElementById("g").style.order = 0;
        document.getElementById("h").style.order = 0;
        document.getElementById("i").style.order = 0;
        document.getElementById("j").style.order = -1;
    }
}

function cargar(){
    document.getElementById("selector").addEventListener("change",Ordenar);
}

document.addEventListener("DOMContentLoaded",cargar);