var socket = io();
var stats = document.querySelector('.stats-pane');

function feedDog(){
    socket.emit('feed dog', {id: 0});
}

socket.on('update stats', res =>{
    stats.innerHTML = `hunger: ${res.hunger}, happiness: ${res.happiness}, cleanlines: ${res.cleaniness}`;
});