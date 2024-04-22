const socket = io('http://localhost:3000')

socket.on('connect', (response) => {
    console.log('client', response)
})