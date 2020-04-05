import io from 'weapp.socket.io'

const createSocket = (ip: string) => {
    const socket = io(ip)
    socket.on('connect', (str: string) => {
        console.log('connect', str)
    })
    socket.on('connect_error', (str: string) => {
        console.log('connect_error', str)
    })
    return socket
}

export default createSocket