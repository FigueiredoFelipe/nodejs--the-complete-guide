// ABOUT FELIPE FIGUEIREDO:
// https://www.linkedin.com/in/fjnfigueiredo/
// https://github.com/FigueiredoFelipe

const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req);
})

server.listen(3000)