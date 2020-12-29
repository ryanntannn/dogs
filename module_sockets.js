function initalize_sockets(http){
    const io = require('socket.io')(http);

    io.on('connection', (client_socket) =>{
        console.log(`Client ${client_socket.id} connected!`);
        client_socket.on('disconnect', () =>{
            console.log(`User ${client_socket.id} disconnected!`);
        });
    });
}

module.exports = { initalize_sockets }