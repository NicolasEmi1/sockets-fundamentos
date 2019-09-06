var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar con el "on"
socket.on('disconnect', function() {
    console.log('Se perdió la conexión con el servidor');
});

// Envío de información con "emit"
socket.emit('enviarMensaje', {
    usuario: 'Nicolas',
    mensaje: 'Hola world'
}, function(res) {
    console.log('Respuesta del servidor: ', res);
});

socket.on('enviarMensaje', function(mensaje){
    console.log(mensaje);
});