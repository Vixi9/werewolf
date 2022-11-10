const server = require('express')();
const http = require('http').Server(server);
const io = require('socket.io')(http);

const port = process.env.PORT || 3000;

let x = 250;
let y = 250;

server.get('/', (req, res) => {
  res.sendFile(`${__dirname}/../index.html`);
});

io.on('connection', (socket) => {
  socket.on('command', () => {
    x += 1;
    y += 1;
    io.emit('move', x, y);
  });
});

http.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
