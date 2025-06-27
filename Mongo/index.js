const mongoose = require('mongoose');

main().then((res) => {
    console.log("connection successfull");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

}
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const User = mongoose.model("User",userSchema);

const user2 = new User({
    name:"boby",
    email: "bob@",
    age: 24
})
user2.save();