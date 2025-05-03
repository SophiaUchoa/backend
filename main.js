const express = require('express'); // Importando o express
const cors = require('cors'); // Importando o cors para permitir requisições de outros domínios
require('dotenv').config(); // Importando o dotenv para variáveis de ambiente


const app = express(); // Criando uma instância do express


app.use(express.json()); // Middleware para trabalhar com JSON
app.use(cors()); // Middleware para permitir requisições de outros domínios

app.get('/', (req, res) => { // Rota raiz
    res.send('Hello World!'); // Retorrna "Hello World!" quando acessa a rota raiz
    }
);

app.listen(3000, () => { // Ligando o servidor na porta 3000
    console.log('Servidor rodando na porta 3000');
    }
);