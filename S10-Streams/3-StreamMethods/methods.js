const fs = require('fs');
const readableStream = fs.createReadStream('../input/leviathan.txt', { highWaterMark: 64 * 1024 });
const writableStream = fs.createWriteStream('../output/backpressureFile.txt', { highWaterMark: 128*1024 });

readableStream.on('data', (chunk) => {
  console.log(`Read ${chunk.length} bytes`);

  // Backpressure
  const canWrite = writableStream.write(chunk);

  if(!canWrite) {
    console.log("Pausing Readable Stream");
    readableStream.pause() 
  }

  console.log(canWrite);
})
  
writableStream.on('drain', () => {
    console.log("Resuming Readable Stream")
    readableStream.resume();
})


// Housekeeping methods
readableStream.on('end', () => {
  console.log('Readable stream ended');
  writableStream.end();
});

readableStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

writableStream.on('error', (err) => {
  console.error('Error writing file:', err);
});