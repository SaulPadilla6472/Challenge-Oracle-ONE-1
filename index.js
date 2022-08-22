
function encriptar(){
    var texto = document.getElementById("input").value.toLowerCase();

    if (texto == "") { 
  
        document.getElementById("noTexto").style.display = "";
        document.getElementById("texto2").innerHTML = ""
        document.getElementById("copiar").style.display = "none";
    
    } else {
        var txtCifrado = texto.replace(/e/igm, "enter");
        var txtCifrado = txtCifrado.replace(/o/igm, "ober");
        var txtCifrado = txtCifrado.replace(/i/igm, "imes");
        var txtCifrado = txtCifrado.replace(/a/igm, "ai");
        var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    
        document.getElementById("noTexto").style.display = "none";
        document.getElementById("texto2").innerHTML = txtCifrado;
        document.getElementById("copiar").style.display = "block";
    }

}

function desencriptar(){
    var texto = document.getElementById("input").value.toLowerCase();

    if (texto == "") { 
  
        document.getElementById("noTexto").style.display = "";
        document.getElementById("texto2").innerHTML = ""
        document.getElementById("copiar").style.display = "none";
    
    } else {

        var txtCifrado = texto.replace(/enter/igm, "e");
            var txtCifrado = txtCifrado.replace(/ober/igm, "o");
        var txtCifrado = txtCifrado.replace(/imes/igm, "i");
        var txtCifrado = txtCifrado.replace(/ai/igm, "a");
        var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

        document.getElementById("noTexto").style.display = "none";
        document.getElementById("texto2").innerHTML = txtCifrado;
        document.getElementById("copiar").style.display = "block";

    }
}

function copiar(){
    var copiar = document.getElementById("texto2")
    copiar.select();
    navigator.clipboard.writeText(copiar.value);
    
}