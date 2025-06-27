const mongoose = require('mongoose');

main().then((res) => {
    console.log("connection successfull");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}
const bookSchema = new mongoose.Schema({
    name: {
        type: String
    },
    author: {
        type: String
    },
    price: {
        type: Number
    },
    discount: {
        type: Number,
        default: 0
    }

})
const book = mongoose.model("book", bookSchema);

const book1 = new book({
    name: "think like a monk",
    author: "shetty",
    price: 1200,
})

book1.save().then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})