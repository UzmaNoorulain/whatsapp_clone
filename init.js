const mongoose = require("mongoose");
const Chat = require("./models/chats.js");

//mongose setup
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

Chat.insertMany([
  {
    from: "Bahare",
    to: "Haya",
    msg: "When will you give me pearl necklace!",
    created_at: new Date(),
  },
  {
    from: "Ayesha",
    to: "Haya",
    msg: "Don't put fear in your heart",
    created_at: new Date(),
  },
  {
    from: "Haya",
    to: "Jihan",
    msg: "Go to Hell",
    created_at: new Date(),
  },
  {
    from: "Jihan",
    to: "Haya",
    msg: "You are my wife and most special for me💓",
    created_at: new Date(),
  },
  {
    from: "Hale",
    to: "DJ",
    msg: "You are so intersting DJ.",
    created_at: new Date(),
  },
  {
    from: "Iram",
    to: "Zara",
    msg: "How cool your parents are!",
    created_at: new Date(),
  },
]);
