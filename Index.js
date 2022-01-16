const http = require('http');
const fs = require('fs');
const home = fs.readFileSync('Index.html');
const Contact = fs.readFileSync('./Contact.html');
const AboutUs = fs.readFileSync('./AboutUs.html');
const Service = fs.readFileSync('./Service.html');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{
    console.log(req.url);
    url = req.url;
    res.statusCode = 200;
    res.setHeader('content-Type','text/html');
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/Contact'){
        res.end(Contact);
    }
    else if(url == '/AboutUs'){
        res.end(AboutUs);
    }
    else if(url == '/Service'){
        res.end(Service);
    }

});

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});