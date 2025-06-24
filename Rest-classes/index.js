const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));


let posts = [
    {
        id: uuidv4(),
        username: "khushi",
        content: "I'm am a girl",
    },
    {

        id: uuidv4(),
        username: "Mayank",
        content: "I'm am a boy",
    },
    {
        id: uuidv4(),
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
    let id = uuidv4();
    posts.push({ id, username, content });
    console.log(req.body);
    res.redirect("/posts");
})
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post })
})
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    // console.log(id);
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");

})

app.listen(port, () => {
    console.log("hii I'm listening");
})