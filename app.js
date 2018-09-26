var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");

let friends = ["Toney", "Miranda", "justing", "sam"];

app.get("/", (req, res) => {
  res.render("home");
  // res.send("welcome to the home page");
});

app.get("/friends", function(req, res) {
  res.render("friends", { friends: friends });
});
app.post("/addfriend", (req, res) => {
  var newFriend = req.body["newfriend"];
  friends.push(newFriend);
  res.redirect("/friends");
});
app.get("/fallinlovewith/:dog", function(req, res) {
  var dog = req.params.dog;
  res.render("love", { dog: dog });
  res.send(`you fell in love with ${dog}`);
});

app.get("/posts", (req, res) => {
  var posts = [
    { title: "post1", author: "susy" },
    { title: "post2", author: "susy" },
    { title: "post3", author: "susy" }
  ];
  res.render("posts", { posts: posts });
});

app.get("/dog", (req, res) => {
  res.send("meow!");
});
app.get("/r/:subredditName", (req, res) => {
  res.send("this is a subereddit");
});
app.get("/r/:subredditName/comments/:id/:title", (req, res) => {
  let subreddit = req.params.subredditName;
  res.send(`welcome to the ${subreddit.toUpperCase()} page`);
  console.log(req.params);
});
app.get("*", (req, res) => {
  res.send("you are a a star");
});
app.get("/html_starter", (req, res) => {
  res.render("html_starter");
});
app.get("/css_starter", (req, res) => {
  res.render("css_starter");
});
app.get("/box_model", (req, res) => {
  res.render("box_model");
});

app.listen(3000, () => console.log("server up"));
