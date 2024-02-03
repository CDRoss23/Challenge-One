const llavesMas = ["ai", "enter", "imes", "ober", "ufat"];
const llavesMenos = ["a", "e", "i", "o", "u"];
var palabrasEncriptadas = [];
var palabrasDesencriptadas = [];

function encriptador() {
    var palabraIntroducida = document.getElementById('ingrese-texto').value;
    var encriptada = "";

    for (var i = 0; i < palabraIntroducida.length; i++) {
        var letra = palabraIntroducida[i];
        if (llavesMenos.includes(letra)) {
            var indice = llavesMenos.indexOf(letra);
            encriptada += llavesMas[indice];
        } else {
            encriptada += letra;
        }
    }
    
    palabrasEncriptadas.push(encriptada);
    document.getElementById('ingrese-texto').value = "";
    console.log("Palabra encriptada: " + encriptada);

    // Ocultar y mostrar elementos según sea necesario
    document.getElementById('standby').style.display = 'none';
    document.getElementById('encriptared-text').style.display = 'block';

    var sDiv = document.getElementById('encriptared-text');
    sDiv.innerHTML += '<p class="encriptado">' + encriptada + ' </p>';
    
}

function desencriptador() {
    var palabraIntroducida = document.getElementById('ingrese-texto').value;
    var desencriptada = "";

    for (var i = 0; i < palabraIntroducida.length; i++) {
        var letra = palabraIntroducida[i];
        if (llavesMenos.includes(letra)) {
            var fragmento = "";
            for (var j = i; j < palabraIntroducida.length; j++) {
                fragmento += palabraIntroducida[j];
                if (llavesMas.includes(fragmento)) {
                    desencriptada += llavesMenos[llavesMas.indexOf(fragmento)];
                    i = j;
                    break;
                }
            }
        } else {
            desencriptada += letra;
        }
    }

    palabrasDesencriptadas.push(desencriptada);
    document.getElementById('ingrese-texto').value = "";
    console.log("Palabra desencriptada: " + desencriptada);

    var sDiv = document.getElementById('encriptared-text');
    sDiv.innerHTML += '<p class="encriptado">' + desencriptada + ' </p>';
}

function copiarContenido() {
    navigator.clipboard
    .readText()
    .then((clipText) => {
        var textoEncriptado = document.querySelector('.encriptado').textContent;
        navigator.clipboard.writeText(textoEncriptado);
        document.querySelector('.encriptado').textContent = "";
        var palabraAEliminar = document.querySelector('.encriptado');
    palabraAEliminar.remove();
    });

}
