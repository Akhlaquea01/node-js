const net = require('net');

const {ClientDuplexStream} =  require("./stream");

const clients = new Set();


const server = net.createServer((socket) => {
  const clientStream = new ClientDuplexStream(socket); // Connection
  clients.add(clientStream);

  console.log('Client connected');
  clientStream.write('Welcome to the chat server!\n');

  setInterval(() => {
    clientStream.write("Ping");
  }, 5000)

  clientStream.on('data', (chunk) => {
    const message = `Client: ${chunk.toString()}`;
    console.log(message);

    // Broadcast the message to all clients
    for (const client of clients) {
      if (client !== clientStream) {
        client.write(message);
      }
    }

    
  });

  clientStream.on('end', () => {
    console.log('Client disconnected');
    clients.delete(clientStream);
  });

  clientStream.on('error', (err) => {
    console.error('Client stream error:', err);
    clients.delete(clientStream);
  });
});




server.listen(8080, () => {
  console.log('Chat server listening on port 8080');
});
