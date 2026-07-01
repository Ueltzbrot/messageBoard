const express = require("express");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const {    getAuthorById,
    links,
    footerLinks} = require("./db");


app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", {links: links, users: users, footerLinks: footerLinks, });
});


app.use("/authors", require("./routes/authorRouter"));
app.use("/about", require("./routes/aboutRouter"));



// error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

const PORT = 3000;
app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});

