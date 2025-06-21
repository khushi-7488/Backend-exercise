const express = require('express');

const app = express();

let port = 3000;

app.get("/", (req,res) =>{
    res.send("you are connected to root path")
})
app.get("/apple", (req,res) =>{
    res.send("you are apple")
})

// app.use((req, res) =>{
//     console.log("request recieved")
//     res.send("this is a basic response")
// })
app.listen(port, () => {
    console.log(`app is listening on ${port}`)
})