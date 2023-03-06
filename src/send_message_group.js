const axios = require('axios');

const token = '6230908656:AAHAw0cYnQrMhCEA9cgGxf3O-4lW2odAnTg';
const chatId = '-1001748393658';
const mensagem = 'Sua mensagem aqui';

axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
  chat_id: chatId,
  text: mensagem
})
  .then(response => {
    console.log('Mensagem enviada com sucesso!');
  })
  .catch(error => {
    console.log('Erro ao enviar mensagem:', error.response.data.description);
  });