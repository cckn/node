const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master Process's ID ${process.pid}`);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
        cluster.fork();

    });
} else {
    //워커들이 포트에서 대기 bn
    http.createServer((req, res) => {
        res.write('<h1>Hello Node!</h1>');
        res.end('<p>Hello Cluster</p>');
        setTimeout(() => {
            process.exit(1);
        },1000);
    }).listen(8085);
    console.log(`${process.pid}번 워커 실행`);
}
