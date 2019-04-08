const os = require('os');

console.log('Hello World');

const fileName = __dirname + '/test.txt';

console.log('Architecture' + os.arch());
console.log('CPUs' + os.cpus().length);
console.log('OS' + os.platform());
//Q3
const fs = require('fs');
fs.readFile(fileName,(err,data) => {
    if (err){

        console.error(err);
    }
    console.log(data.toString());
});

const data = fs.readFileSync(fileName);
console.log(data.toString());


//Q4
const fileName2 = __dirname + '/test.txt';
const outFileName = __dirname + '/test-copy.txt'

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);

readStream.on('data',data =>{
    console.log(data.toString());
});


//Q5
const http = require('http');
http.createServer((req,res) => {

    res.setHeader('Content-type','text/html');
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(3000);