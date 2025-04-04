const cron = require('node-cron');

console.log('Starting the cron service...');

// Configuring the cron to run every 30 seconds
// The 5 fields are: minute, hour, day of the month, month, day of the week
// '*/30 * * * * *' means: every 30 seconds
cron.schedule('*/30 * * * * *', () => {
  const now = new Date();
  console.log(`===============> Executing cron job at: ${now.toLocaleString()}`);
});

console.log('Cron job successfully configured! Waiting for executions...');