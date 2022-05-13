const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },
  lastName: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  
});



module.exports= model("User",userSchema )