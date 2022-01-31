const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const figlet = require("figlet");
const path = require("path");

class Paths {
  homepage() {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  }
  otherPage() {
    {
      fs.readFile("otherpage.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    }
  }
  otherotherpage() {
    fs.readFile("otherotherpage.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
  api() {
    {
      res.writeHead(200, { "Content-Type": "application/json" });
      const objToJson = {
        name: "leon",
        status: "Boss Man",
        currentOccupation: "Baller",
      };
      res.end(JSON.stringify(objToJson));
    }
  }
  api_2() {
    res.writeHead(200, { "Content-Type": "application/json" });
    const objToJson = {
      name: "unknown",
      status: "unknown",
      currentOccupation: "unknown",
    };
    res.end(JSON.stringify(objToJson));
  }
  load_css() {
    fs.readFile("css/style.css", function (err, data) {
      res.write(data);
      res.end();
    });
  }

  load_js() {
    fs.readFile("js/main.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  }

  load_error_message() {
    figlet("404!!", function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
}

let paths = new Paths();

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == "/") {
    paths.homePage();
  } else if (page == "/otherpage") {
    path.otherPage();
  } else if (page == "/otherotherpage") {
    path.otherotherpage();
  } else if (page == "/api") {
    if ("student" in params) {
      if (params["student"] == "leon") {
        path.api();
      } //student = leon
      else if (params["student"] != "leon") {
        path.api_2();
      } //student != leon
    } //student if
  } //else if
  else if (page == "/css/style.css") {
    path.load_css();
  } else if (page == "/js/main.js") {
    path.load_js();
  } else {
    path.load_error_message();
  }
});

server.listen(8000);
