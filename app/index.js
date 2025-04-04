const cron = require('node-cron');
const http = require('http');

console.log('Starting the cron service...');

cron.schedule('*/30 * * * * *', () => {
  const now = new Date();
  console.log(`===============> Executing cron job at: ${now.toLocaleString()}`);
});

console.log('Cron job successfully configured! Waiting for executions...');

// Create HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Cron service is running\n');
});

// Start HTTP server on port 3000
server.listen(3000, () => {
  console.log('HTTP server started on port 3000');
});