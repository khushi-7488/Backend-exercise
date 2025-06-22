const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true }));

app.get("/register",(req, res) => {
        let {user, password} = req.query;
    res.send(`standard get response by ${user}`)
})
app.post("/register",(req, res) => {
    let {user, password} = req.body;
    res.send(`standard post response by ${user}`)
})
app.listen(port, () =>{
    console.log(`listening on port ${port}`)
})