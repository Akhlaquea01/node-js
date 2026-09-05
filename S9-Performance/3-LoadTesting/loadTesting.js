const autocannon = require('autocannon');

const instance = autocannon({
    url: 'http://localhost:3000',
    connections: 10,
    pipelining: 5,
    duration: 20
}, console.log);

// Track progress
autocannon.track(instance, { renderProgressBar: true });