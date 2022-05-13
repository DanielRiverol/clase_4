const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(
        process.env.DB_URI || "mongodb://localhost/my_database",
      {
            useNewUrlParser:true,
            useUnifiedTopology:true
});
      console.log("Conectado");
  } catch (error) {
      console.log(err);
  }
};

module.exports = connect;
