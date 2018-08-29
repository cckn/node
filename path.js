const path = require('path')

const string = __filename


console.log(path.seq);
console.log(path.delimiter);

console.log('---------------------');

console.log(path.dirname(string));
console.log(path.extname(string));
console.log(path.basename(string));
console.log(path.basename(string,path.extname(string)));
console.log('--------------------------');


console.log(path.parse(string));
console.log(path.format({
    dir:'C\\users\\ds\\ws\\node',
    name:'path',
    ext:'.js'
}));
console.log(path.normalize('C://users\\\\ds\\\\ws\\\\node\\\\path.js'));

console.log('------------------------------');

console.log(path.isAbsolute('C:\\'));
console.log(path.isAbsolute('./home'));

console.log('------------------');

console.log(path.relative('C:\\users\\ds\\ws\\node\\path.js','C:\\'));
console.log(path.seq);
console.log(path.seq);
