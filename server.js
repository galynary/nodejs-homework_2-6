const mongoose = require("mongoose");

const app = require("./app");


 const DB_HOST ="mongodb+srv://Halyna:t4G3SGf9JUqUL8jQ@cluster0.jkk4kun.mongodb.net/db-contacts";


mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  console.log("Server running. Use our API on port: 3000")
})
.catch(error => { 
  console.log(error.message);
  process.exit(1);
});






