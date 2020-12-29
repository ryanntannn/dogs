var socket = io();
var stats = document.querySelector('.stats-pane');

var hungerBar = document.getElementById('hunger-bar');
var happinessBar = document.getElementById('happiness-bar');
var cleanlinessBar = document.getElementById('cleanliness-bar');

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
	// stats.innerHTML = `hunger: ${res.hunger}, happiness: ${res.happiness}, cleanlines: ${res.cleaniness}`;
	hungerBar.style.width = `${res.hunger*100.0}%`
	happinessBar.style.width = `${res.happiness*100.0}%`
	cleanlinessBar.style.width = `${res.cleaniness*100.0}%`
});