var socket = io();

function feedDog(){
    socket.emit('feed dog');
}