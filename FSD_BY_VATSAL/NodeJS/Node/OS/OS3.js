var os = require("os")
var fs = require("fs")
var temp = os.tmpdir()
var win = os.platform()
fs.mkdirSync(temp + "/AB")
if (win == "win32"){
    fs.writeFileSync(temp+"/AB/temp.txt" , "Working in WIN32")
    console.log("Working in WIN32")
}else{
    fs.writeFileSync(temp+"/AB/temp.txt" , "Not Working in WIN32")
    console.log("Not Working in WIN32")
}