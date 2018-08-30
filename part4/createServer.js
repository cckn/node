const http = require('http');

http.createServer((req, res) => {
    console.log(req);
    console.log(res);
});
