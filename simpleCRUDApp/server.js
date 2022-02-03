const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const connectionString = `mongodb+srv://qwe:${encodeURIComponent(
  "oz5?9AQyj!hCN5Bp"
)}@cluster0.wn3ge.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
PORT = 4000;

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to Database");
    app.set("views engine", "ejs");

    const db = client.db("star-wars-quotes");
    const quotesCollection = db.collection("quote");
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get("/", (req, res) => {
      res.sendFile(__dirname + "/index.html");

      db.collection("quote")
        .find()
        .toArray()
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.error(error));
      //res.render("index.ejs", { quotes: result });
    });

    app.post("/quotes", (req, res) => {
      quotesCollection
        .insertOne(req.body)
        .then((result) => {
          res.redirect("/");
        })
        .catch((error) => console.error);
      console.log(req.body);
    });

    app.listen(PORT, function () {
      console.log("listening on 3000");
    });
  })
  .catch(console.error);
