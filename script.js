// let args = process.argv;
// for (let i=2; i < args.length; i++)
// {
//     console.log("hello to", args[i]);
// }



// const someval = require("./math");
// console.log(someval.sum(2, 2));


var figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});