const mongoose = require("mongoose");

const DB =
  "mongodb+srv://NodeTest:NodeTest@cluster0.aurpaub.mongodb.net/TestNode?retryWrites=true&w=majority";
mongoose
  .connect(DB)
  .then(() => {
    console.log("connextioon susscesfull");
  })
  .catch((err) => {
    console.log("fail connection");
  });

var db = mongoose.connection;
db.on("erre", console.error.bind(console, "connection errorrr"));

db.once("open", function () {
  console.log("sucss");

  var BookSchema = mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
  });

  var Book = mongoose.model("Book", BookSchema, "bookstore");

  var book1 = new Book({
    name: "my first Monogo test",
    price: 20,
    quantity: 10,
  });

  book1.save(function (err, book) {
    if (err) return console.log(err);

    console.log(book.name + "saved to book store");
  });
});
