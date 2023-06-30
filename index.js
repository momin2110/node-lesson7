const http = require('http');
const fs = require('fs');
const port = 3000;
const hostName = '127.0.0.1';

// const server = http.createServer((req, res)=>{
//     if(req.url === '/'){
//         fs.readFile("home.html", (err, data)=>{
//             res.writeHead(202, {"Content-Type" : "text/html"});
//             res.write(data);
//             res.end();
//         })
//     }else if(req.url === '/about'){
//         fs.readFile('about.html', (err, data)=>{
//             res.writeHead(202, {"Content-Type" : "text/html"});
//             res.write(data);
//             res.end();
//         })
//     }else if(req.url === '/contact'){
//         fs.readFile('contact.html', (err, data)=>{
//                 res.writeHead(202, {"Content-Type" : "text/html"});
//                 res.write(data);
//                 res.end();
//             })
//     }else{
//         fs.readFile('error.html', (err, data)=>{
//             res.writeHead(404, {"Content-Type" : "text/html"});
//             res.write(data);
//             res.end();
//         })
//     }
// });

const server = http.createServer((req, res)=>{
    const handleWriteFile = (statusCode, fileName) =>{
        fs.readFile(fileName, (err, data)=>{
            res.writeHead(statusCode, {"Content-Type" : "text/html"});
            res.write(data);
            res.end();
        })
    }
    if(req.url === '/'){
        handleWriteFile(202, './views/home.html')
    }else if(req.url === '/about'){
        handleWriteFile(202, './views/about.html')
    }else if(req.url === '/contact'){
        handleWriteFile(202, './views/contact.html')
    }else{
        handleWriteFile(404, './views/error.html')
    }
});

server.listen(port, hostName, ()=>{
    console.log(`Server is running at http://${hostName}:${port}`);
})


