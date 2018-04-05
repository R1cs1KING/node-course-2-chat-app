var socket = io();

        socket.on('connect', function () {
            console.log('Connectiong to the server');

            socket.emit('createMessage', {
                from: 'mememe',
                text: 'this is an awesome message, is not it?'
            });
        });

        socket.on('disconnect', function () {
            console.log('Disconnected from server');
        });

        socket.on('newMessage', function (message) {
            console.log('newMessage', message);
        });
