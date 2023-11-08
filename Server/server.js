// Importa o módulo 'http', que fornece funcionalidades para criar servidores HTTP.
const http = require('http');

// Cria um servidor usando a função 'createServer' do módulo 'http'.
// A função de callback é chamada sempre que uma requisição é feita ao servidor.
const server = http.createServer((req, res) => {
  // Define o código de status da resposta como 200 (OK) e o tipo de conteúdo como texto simples.
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Escreve o conteúdo da resposta, que neste caso é a mensagem 'Hello, Node.js!'.
  res.end('Hello, Node.js!');
});

// Define a porta em que o servidor vai ouvir as requisições.
const port = 3000;

// Inicia o servidor para escutar na porta especificada.
// A função de callback é chamada quando o servidor é iniciado.
server.listen(port, () => {
  // Exibe uma mensagem no console indicando que o servidor está rodando.
  console.log(`Servidor rodando em http://localhost:${port}`);
});
