var url = require("url")
var fs = require("fs")
var addr  = "https://lju.com:8080/test?year=2025&month=march#about"
var u = url.parse(addr , true)
var u1 = JSON.stringify(u.query)
fs.writeFile("u1.txt", u1 ,(e,d)=>{
    if(e){
        console.log("written")
        console.log(e)
    }else{
        var d1 = JSON.parse(d)
        console.log(d1.year)
        console.log("done")
    }
})