const request = require ('request');
const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end('Json placeholder')
})

request({
    url: "https://jsonplaceholder.typicode.com/posts",
    json: true
}, (err, response, body) => {
    console.log(JSON.stringify(body, undefined, 4));
});

server.listen(8080, function() {
    console.log('server is running')
})