var os = require("os")
var fs = require("fs")
var temp = os.tmpdir()
var fm = os.freemem()/1073741824
fs.mkdirSync(temp + "/AA")
if(fm>1){
    fs.writeFileSync(temp+"/AA/temp.txt" , "sufficient memory")
    console.log("sufficient memory")
}else{
    fs.writeFileSync(temp+"/AA/temp.txt" , "Insufficient memory")
    console.log("Insufficient memory")
}