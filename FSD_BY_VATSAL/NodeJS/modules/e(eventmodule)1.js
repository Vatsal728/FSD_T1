const eventmitter = require("events")
const ee = new eventmitter()
ee.on("start",()=>{
    console.log("Event started")
})

ee.on("start",()=>{
    console.log("Started again")
})

ee.addListener("end",()=>{
    console.log("Event ended")
})

console.log("Hello")
ee.emit("start")
console.log("test")
ee.emit("end")