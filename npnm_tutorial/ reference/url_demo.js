const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100");

console.log(myUrl.href);
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

myUrl.searchParams.forEach((value, name) => console.log(value, name));
