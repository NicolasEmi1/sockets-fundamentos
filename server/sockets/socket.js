const {io} = require('../server');

io.on('connection', (client) => { // "client" tiene toda la info de la computadora que se conectó o de la conexión que se estableció
    
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
         console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (data.usuario) {
        //     callback({
        //         res: 'Todo OK'
        //     });
        // } else {
        //     callback({
        //         res: 'Todo no-OK'
        //     });
        // }
        
    });

});