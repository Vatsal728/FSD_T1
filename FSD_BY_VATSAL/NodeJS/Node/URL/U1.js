var url = require("url")
var addr  = "https://lju.com:8080/test?year=2025&month=march#about"
// var addr  = "https://www.pexels.com/search/4k%20wallpaper/"
var q = url.parse(addr , true) // default value false
console.log(q)
if(q.query.year%4==0){
    console.log("leap year")
}else{
    console.log("Not")
}