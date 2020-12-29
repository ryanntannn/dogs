const { update_dog } = require('./gameplay_manager.js');

function initalize_sockets(http){
    const io = require('socket.io')(http);

    io.on('connection', (client_socket) =>{
        console.log(`Client ${client_socket.id} connected!`);
        update_dog({id: 0, type: 'just dog'}).then(dog =>{
            client_socket.emit('update stats', dog);
        });
        
        client_socket.on('disconnect', () =>{
            console.log(`User ${client_socket.id} disconnected!`);
        });

        client_socket.on('update dog', (data)=>{
            update_dog(data).then((dog) => {
                io.emit('update stats', dog);
            });
        });
    });
}

module.exports = { initalize_sockets }