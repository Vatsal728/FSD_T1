var eventemitter = require("events");
var ee = new eventemitter();
ee.on("findval", (r, s) => {
  if (r < 0) {
    ee.emit("radius must be positive");
  } else {
    console.log(2 * 3.14 * r);
  }
  if (s < 0) {
    ee.emit("side must be positive");
  } else {
    console.log(4 * s);
  }
});
ee.emit("findval",10,3)