const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());

const MongoClient = require("mongodb").MongoClient;
//

MongoClient.connect(
  "mongodb+srv://honlisa:honlisa@cluster0.trqaz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
  }
)
  .then((client) => {
    console.log("Connected to Database");
    const db = client.db("star-wars-quotes");

    const quotesCollection = db.collection("quotes");

    app.use(bodyParser.urlencoded({ extended: true }));

    app.get("/", (req, res) => {
      const cursor = db
        .collection("quotes")
        .find()
        .toArray()
        .then((results) => {
          res.render("index.ejs", { quotes: results });
        })
        .catch((error) => console.error(error));
    });

    app.post("/quotes", (req, res) => {
      quotesCollection
        .insertOne(req.body)
        .then((result) => {
          res.redirect("/");
        })
        .catch((error) => console.error(error));
    });

    app.put("/quotes", (req, res) => {
      quotesCollection
        .findOneAndUpdate(
          { name: "Yoda" },
          { $set: { name: req.body.name, quote: req.body.quote } },

          { upsert: true }
        )

        .then((result) => {
          res.json("Success");
        })
        .catch((error) => console.error(error));
    });

    app.delete("/quotes", (req, res) => {
      quotesCollection.deleteOne(
        {
          name: req.body.name,
        }
          .then((result) => {
            if (result.deletedCount === 0) {
              messageDiv.textContent = "No quote to delete";
            } else {
              window.location.reload(true);
            }
          })
          .catch((error) => console.error(error))
      );
    });

    app.listen(3000, function () {
      console.log("Listening on 3000");
    });
  })
  .catch(console.error);
