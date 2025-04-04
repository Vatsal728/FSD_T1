var os = require("os")
console.log(os.arch())
console.log(os.hostname())
console.log(os.platform())
console.log(os.tmpdir())
var fm = os.freemem()
console.log(fm)
var  k = fm/1024
console.log(k)
var  m = fm/1048576
console.log(m)
var g = fm/1073741824
console.log(g)
