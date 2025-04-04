const cron = require('node-cron');

console.log('Iniciando o serviço de cron...');

// Configurando o cron para executar a cada 30 segundos
// Os 5 campos são: minuto, hora, dia do mês, mês, dia da semana
// '*/30 * * * * *' significa: a cada 30 segundos
cron.schedule('*/30 * * * * *', () => {
  const agora = new Date();
  console.log(`Executando cron job em: ${agora.toLocaleString()}`);
});

console.log('Cron job configurado com sucesso! Aguardando execuções...');