const fs = require('fs');
const {Transform} = require('stream');
const readableStream = fs.createReadStream('../input/leviathan.txt', { highWaterMark: 64 * 1024 });
const writableStream = fs.createWriteStream('../output/transformedOutput.txt', { highWaterMark: 128*1024 });

const lowerCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toLowerCase());
        callback();
    }
})


readableStream
    .pipe(lowerCaseTransform)
    .pipe(writableStream);


writableStream.on('finish', () => {
    console.log('Finished transforming and writing to file.');
});