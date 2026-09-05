const fs = require('fs');
const readableStream = fs.createReadStream('../input/leviathan.txt', { highWaterMark: 64 * 1024 });
const writableStream = fs.createWriteStream('../output/backpressureFile.txt', { highWaterMark: 128*1024 });

readableStream.pipe(writableStream);

readableStream.on('data', (chunk) => {
  console.log(`Read ${chunk.length} bytes`);
});

readableStream.on('end', () => {
  console.log('Readable stream ended');
});

writableStream.on('finish', () => {
  console.log('Writable stream finished');
});

// Handle errors
readableStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

writableStream.on('error', (err) => {
  console.error('Error writing file:', err);
});