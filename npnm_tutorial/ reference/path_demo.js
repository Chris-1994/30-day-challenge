const path = require("path");

// base file name for
console.log(path.basename);

console.log(path.dirname(__filename));

console.log(path.extname(__filename));

console.log(path.parse(__filename));

console.log(path.join(__dirname, "test", "hello.html"));
