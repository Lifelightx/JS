const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInp = document.getElementById('message');
const messagecontainer = document.querySelector('.chat-container');

const  named = prompt("Enter your name:"); 
socket.emit('user', named);