const io = require('socket.io')(8000);
const cors = require('cors');
const users = {};

io.on('connection', (socket) => {
    socket.on('user', named=>{
        console.log(named);
        users[socket.id] = named;
        socket.broadcast.emit('user-joined', named);
    });
    socket.on('send', message=>{
        socket.broadcast.emit('receive', {message: message, name: users[socket.id]});
    });

});
