// Sorting Using Array
var fs = require("fs")
fs.writeFileSync("node/sort.txt","50 -1 99 100 20 41 0 62 35")
data = fs.readFileSync("node/sort.txt","UTF-8")
console.log(data)
d = data.split(" ")
console.log(d)
d1 = d.sort((a,b)=>a-b)
console.log(d1)
let arr = []
for(i=0;i<d1.length;i++){
    arr[i] = parseInt(d1[i])
}
console.log(arr)