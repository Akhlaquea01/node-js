const fs = require('fs');

// All 31 MB would be in memory
// const leviathan = fs.readFileSync('../input/leviathan.txt');

const readableStream = fs.createReadStream('../input/leviathan.txt', {encoding: 'utf-8', highWaterMark: 128 * 1024});

readableStream.on('data', (chunk) => {
    console.log("Received chunk of length: ", chunk.length);
});

readableStream.on('end', () => {
    console.log("Finished reading file");
})

readableStream.on('error', (err) => {
    console.log("Some error occured", err);
})


