var socket = io();

function feedDog(){
    socket.emit('feed dog', {id: 0});
}

socket.on('update stats', res =>{
    console.log(res);
});