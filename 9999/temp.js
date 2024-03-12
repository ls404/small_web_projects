const EventEmitter = require("events");

class Emitter extends EventEmitter {}

const myE = new Emitter();

myE.on("foo", () => {
  console.log("An event ocurred 1.");
});
myE.on("foo", () => {
  console.log("An event ocurred 2.");
});
myE.on("foo", (x) => {
  console.log(`An event ocurred with param: ${x}.`);
});
myE.once("bar", (x) => {
  console.log(`An event ocurred with param: ${x}.`);
});

myE.emit("foo");
myE.emit("foo", " some text1");
myE.emit("bar", "bar some text1");
myE.emit("bar", "bar some text2");
myE.emit("bar", "bar some text3");
console.log("end");
