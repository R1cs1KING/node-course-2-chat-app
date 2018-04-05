const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newEmail', {
        from: 'asd@besked.dk',
        text: 'Oh, hi Mark!',
        createAt: 123
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });

    socket.emit('newMessage', {
        from: 'John',
        text: 'Do u kno da way?',
        createAt: 123123
    });

    socket.on('createMessage', (message) => {
        console.log('New message was created', message);
    });
});

server.listen(3000, () => {
    console.log(`Server is up on ${port}`);
});
