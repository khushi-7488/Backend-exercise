const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))

let posts = [
    {
        id: "1a",
        username: "khushi",
        content: "I'm am a girl",
    },
    {

        id: "2a",
        username: "Mayank",
        content: "I'm am a boy",
    },
    {
        id: "3a",
        username: "Rahulkumar",
        content: "I'm am a girl",
    }
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
})
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    posts.push({ username, content });
    console.log(req.body);
    res.redirect("/posts");
})
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    console.log(post);
    res.send("request sent")
})

app.listen(port, () => {
    console.log("hii I'm listening");
})