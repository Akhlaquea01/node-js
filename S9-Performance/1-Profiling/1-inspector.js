const inspector = require('inspector');
const fs = require('fs');
const session = new inspector.Session();
session.connect();

/**
 * Capture CPU Profile
 */
async function captureCPUProfile(durationMs = 5000, filename = 'cpu-profile.cpuprofile') {
  console.log(`Starting CPU profiling for ${durationMs / 1000}s...`);
  session.post('Profiler.enable');
  session.post('Profiler.start');

  await new Promise(resolve => setTimeout(resolve, durationMs));

  const { profile } = await new Promise((resolve, reject) => {
    session.post('Profiler.stop', (err, params) => {
      if (err) reject(err);
      else resolve(params);
    });
  });

  fs.writeFileSync(filename, JSON.stringify(profile));
  console.log(` CPU profile saved to ${filename}`);
}

/**
 * Capture Heap Snapshot
 */
async function captureHeapSnapshot(filename = 'heap.heapsnapshot') {
  console.log(`Capturing heap snapshot...`);
  session.post('HeapProfiler.enable');

  const stream = fs.createWriteStream(filename);
  await new Promise((resolve, reject) => {
    session.on('HeapProfiler.addHeapSnapshotChunk', m => stream.write(m.params.chunk));
    session.post('HeapProfiler.takeHeapSnapshot', null, err => {
      if (err) reject(err);
      else {
        stream.end();
        resolve();
      }
    });
  });

  console.log(`Heap snapshot saved to ${filename}`);
}

/**
 * Example workload
 */
function busyWork() {
  const arr = [];
  for (let i = 0; i < 1e6; i++) {
    arr.push({ id: i, text: `Item ${i}` });
  }
  return arr.length;
}

/**
 * Run Demo
 */
(async () => {
  busyWork(); // warm-up
  await captureCPUProfile(3000);
  await captureHeapSnapshot();
  console.log('Profiling complete.');
  session.disconnect();
})();