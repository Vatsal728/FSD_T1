const fs = require('fs');
const data = {d:{a:10,b:20,c:[30,10]}};
fs.writeFileSync('s2.txt', JSON.stringify(data, null, 2));
console.log('Object written to s2.txt');
const fileData = fs.readFileSync('s2.txt', 'utf8');
const d1 = JSON.parse(fileData);

const a = d1.d.a;
const b = d1.d.b;
const c = d1.d.c;

const addition = a + b;
const subtraction = Math.abs(c[1] - b);
const multiplication = c[0] * c[1];

const result = {
    addition: addition,
    subtraction: subtraction,
    multiplication: multiplication
};

d1.result = result;
fs.writeFileSync('s2.txt', JSON.stringify(d1, null, 2));
console.log('Results added to s2.txt');