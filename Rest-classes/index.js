const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.set(express.static(path.join(__dirname, "public")))

let posts = [
    {
        username: "khushi",
        content: "I'm am a girl",
    },
    {
        username: "Mayank",
        content: "I'm am a boy",
    },
    {
        username: "Rahulkumar",
        content: "I'm am a girl",
    }
]

app.get("/posts", (req, res) => {
    res.send("server is working");
})
app.listen(port, () => {
    console.log("hii I'm listening");
})