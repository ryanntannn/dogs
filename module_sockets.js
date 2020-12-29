const { feed_dog } = require('./gameplay_manager.js');

function initalize_sockets(http){
    const io = require('socket.io')(http);

    io.on('connection', (client_socket) =>{
        console.log(`Client ${client_socket.id} connected!`);
        client_socket.on('disconnect', () =>{
            console.log(`User ${client_socket.id} disconnected!`);
        });

        client_socket.on('feed dog', (data)=>{
            feed_dog(data).then((dog) => {
                client_socket.emit('update stats', dog);
            });
        });
    });
}

module.exports = { initalize_sockets }