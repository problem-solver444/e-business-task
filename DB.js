const mongoose = require("mongoose");

mongoose.connect(
  'mongodb+srv://ahmedashraf182005:01210093908MM@cluster0.wmhxm5q.mongodb.net/'
)
.then(() => {
  console.log("Connected to DB");
  // أضف هذا السطر لرؤية أن الاتصال ناجح
  console.log(mongoose.connection.readyState); // يجب أن تطبع 1
})
.catch((err) => {
  console.log("Error connecting to DB:", err.message);
});