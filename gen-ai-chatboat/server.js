const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.writeHead(200, {'content-type': 'application/json'})
        res.end("hello world from AI projects")
    }
})

server.listen(PORT, ()=>{
    console.log('server is runnign on PORT', PORT)
})

