var respuesta, respuesta2, respuesta4, respuesta5;

function comprobarCar() {
    $.ajax({
        type: "POST",
        url: "../php/selectCar.php",
        success: function(response) {
            respuesta = response;
        },
        async: false
    })
    return respuesta;
}

function comprobarPal(palabra) {
    $.ajax({
        type: "POST",
        url: "../php/selectPal.php",
        data: { palabra: palabra },
        success: function(response) {
            respuesta1 = response;
        },
        async: false
    })
    return respuesta1;
}

function comprobarDesc(palabra) {
    $.ajax({
        type: "POST",
        url: "../php/selectDesc.php",
        data: { palabra: palabra },
        success: function(response) {
            respuesta2 = response;
        },
        async: false
    })
    return respuesta2;
}


//Solicitud para llenar tablas 

function tablaPalabra() {
    $.ajax({
        type: "POST",
        url: "../php/selectTabPal.php",
        dataType: 'json',
        success: function(response) {
            respuesta4 = response;
        },
        async: false
    })
    return respuesta4;
}

function tablaASCII() {
    $.ajax({
        type: "POST",
        url: "../php/selectTabASCII.php",
        dataType: 'json',
        success: function(response) {
            respuesta5 = response;
        },
        async: false
    })
    return respuesta5;
}