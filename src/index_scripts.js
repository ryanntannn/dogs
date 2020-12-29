var socket = io();
var stats = document.querySelector('.stats-pane');

function feedDog(){
    socket.emit('update dog', {id: 0, type: 'feed'});
}

function playDog(){
    socket.emit('update dog', {id: 0, type: 'play'});
}

function cleanDog(){
    socket.emit('update dog', {id: 0, type: 'clean'});
}

socket.on('update stats', res =>{
    stats.innerHTML = `hunger: ${res.hunger}, happiness: ${res.happiness}, cleanlines: ${res.cleaniness}`;
});