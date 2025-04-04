class person {
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }
  elder(p) {
    if (this.age > p.age) {
      return this;
    } else {
      return p;
    }
  }
}
var p1 = new person("xyz", 23);
var p2 = new person("abc", 34);
var p3 = p1.elder(p2);
const jsonstr = JSON.stringify(p3);
var ps = require("fs");
ps.writeFileSync("d2.txt", jsonstr);

