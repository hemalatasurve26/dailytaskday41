//
const mongoose = require("mongoose");
let dbcon =
  "mongodb+srv://hemasurve:HEMALATA@cluster0.hjlwvud.mongodb.net/assign-student-mentor";
mongoose
  .connect(dbcon, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.log(err));
