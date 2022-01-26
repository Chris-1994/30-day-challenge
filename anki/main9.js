console.log("Synchronous 1");

setTimeout((_) => console.log("timeout 2"), 0);

Promise.resolve().then((_) => console.log("promise"));

console.log("Synchronous 4");
