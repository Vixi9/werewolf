import {Socket} from 'socket.io';

export interface Player {
    socket: Socket;
    move();
}
