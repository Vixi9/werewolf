import {Socket} from 'socket.io-client';

export interface Player {
    socket: Socket;
    move();
}
