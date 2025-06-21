const express = require ("express");
const app = express();

const port = 8080;

app.listen(port, () => {
    console.log(`listeining on port ${port}`)
})

app.set("view engine", "ejs");

app.get("/",(req, res) =>{
    res.render("home.ejs")
})
app.get("/rolldice",(req, res) =>{
    const diceVal = Math.floor(Math.random() *6) + 1;
    res.render("rolldice.ejs", {diceVal})
})

app.get("/ig/:username", (req,res) => {
    const followers = ["khushi", "mayank"]
    let {username} = req.params;
    res.render("insta.ejs",{username, followers})
})