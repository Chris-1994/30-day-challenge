const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

let rappers = {
  "21 savage": {
    age: 28,
    birthName: "Shéyaa Bin Abraham-Joseph",
    birthLocation: "London, England",
  },

  "chance the rapper": {
    age: 28,
    BirthName: "Chancelor Johnathan Bennett,",
    BirthLocation: "chicago Illinois",
  },
  dylan: { age: "dylan", BirthName: "dylan", BirthLocation: "dylan" },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/rappers/:rapperName", (request, response) => {
  const rapName = request.params.rapperName.toLowerCase();
  console.log(rapName);
  if (rappers[rapName]) {
    response.json(rappers[rapName]);
  } else {
    response.json(rappers["dylan"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log("Server running on port", PORT);
});
