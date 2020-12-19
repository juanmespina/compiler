function llenarPalabra() {
    var palabra = tablaPalabra();
    for (i = 0; i < palabra.length - 1; i++) {
        $("#tablaPalabra").append(palabra[i][0] + ": " + palabra[i][1] + "\n");
        $("#tablaPalabra").append("___________________\n");
    } //for
} //llenarPalabra

function llenarASCII() {
    var ASCII = tablaASCII();
    for (i = 0; i < ASCII.length - 1; i++) {
        $("#tablaASCII").append("ALT" + ASCII[i][0] + ": " + ASCII[i][1] + "\n");
        $("#tablaASCII").append("___________________\n");
    } //for
} //llenarASCII