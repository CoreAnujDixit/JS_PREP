const http = require('http')
const hostname = '127.0.0.1';

const PORT = 3000;

const server = http.createServer((req, res)=>{
    if (req.url == '/') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain')
        res.end("home page")
    }
    else if (req.url == '/ice-tea') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain')
        res.end("ice tea is there")
    }
    else{ {
            res.statusCode = 404;
            res.setHeader('Content-type', 'text/plain')
            res.end("ERROR IS OCCURING")
        }
    }
})

server.listen(PORT, hostname, () => {
    console.log(`Server is Running on http://${hostname}:${PORT}`);
});