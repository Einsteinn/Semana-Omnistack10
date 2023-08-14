import socketio from 'socket.io-client'

const socket = socketio('http:localhost:3333', {
    autoConnect: false
})

function subscribeToNewDevs(subscribeFunction) {
    socket.on('new-dev', subscribeFunction)
}

function connect(latitude, longitude, tecnologias) {
    socket.io.opts.query = {
        latitude,
        longitude,
        tecnologias
    }

    socket.connect()
}

function disconnect() {
    if (socket.connect) {
        socket.disconnect()
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs
}