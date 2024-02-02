const cp = require("child_process")

cp.execSync("start chrome")

console.log("output " + cp.execSync("node demo.js"))