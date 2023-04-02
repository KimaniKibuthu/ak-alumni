const app = require('./app');
const http = require('http');
const server = http.createServer(app);
const mongoose = require('mongoose');
const socketio = require('socket.io');
const  db = require('./db/db')

db.connect().then(() => {
    const io = socketio(server, {
        cors: {
            origin: '*'
        }
    })
    
    // Placeholder for when we get started with chat functionality.
    // const chat = require('./routes/chat_publicly/chat')(io);
    // app.use('/messages', chat);

    server.listen(process.env.PORT || 4000); 
})