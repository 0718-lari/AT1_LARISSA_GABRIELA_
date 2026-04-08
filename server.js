const express = require('express');
const server = express();

server.use((req, res, next) => {
    console.log('Acesso Permitido');
    next();
});

server.use((req, res, next) => {
    req.requestTime = Date.now();
    next();
});


server.get('/', (req, res) => {
    console.log('Tempo da requisição:', req.requestTime);
    res.sendFile('home.html', { root: __dirname });
});


server.get('/gabriela', (req, res) => {
    res.sendFile('gabriela.html', { root: __dirname });
});

server.get('/larissa', (req, res) => {
    res.sendFile('larissa.html', { root: __dirname });
});


server.use((req, res) => {
    res.status(404).sendFile('erro.html', { root: __dirname });
});

server.listen(3000, () => {
    console.log('Acesso permitido');
});