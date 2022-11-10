import {io} from 'socket.io-client';

const socket = io();

const canvas: document.getElementById('canvas');
const context = (canvas as HTMLCanvasElement).getContext('2d');

let x = 250;
let y = 250;

function update() {
  context.clearRect(0, 0, 500, 500);
  context.beginPath();
  context.arc(x, y, 25, 0, 2 * Math.PI);
  context.closePath();
  context.fill();
  requestAnimationFrame(update);
}

document.addEventListener('keydown', (event) => {
  const name = event.key;
  const code = event.code;
  console.log(`Key pressed ${name} \r\n Key code value: ${code}`);
  socket.emit('command', x + 1, y + 1);
});

socket.on('move', (dx, dy) => {
  x = dx;
  y = dy;
});

update();
