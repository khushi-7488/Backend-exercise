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
    let {username} = req.params;
    const instaData = require ("./data.json")
    const data = instaData[username];
    if(data){
        res.render("insta.ejs",{data})
    }else{
        res.render("error.ejs")
    }
})