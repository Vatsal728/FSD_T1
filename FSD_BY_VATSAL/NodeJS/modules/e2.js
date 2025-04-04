const eventmitter = require("events");
const ee = new eventmitter();
ee.on("start", (a, b) => {
  console.log("mul is", a * b);
  console.log("event completed");
  ee.emit("end");
});
ee.on("end", () => {
  console.log("ended");
});
ee.emit("start", 3, 2);
