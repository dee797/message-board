
require('dotenv').config();
const path = require("node:path");
const express = require("express");
const app = express();
const newMessageRouter = require("./routes/newMessageRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");



const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


app.use("/new", newMessageRouter);

app.get('/', (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages});
});



app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).render("error");
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT);
