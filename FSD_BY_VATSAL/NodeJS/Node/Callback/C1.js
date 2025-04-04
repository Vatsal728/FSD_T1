const msg = function(){
    console.log("Hello")
}
setTimeout(msg,5000)

setTimeout(() => {
    console.log("Hi")
}, 3000);

setTimeout(() => {
    console.log("Vatsal")
}, 2000);