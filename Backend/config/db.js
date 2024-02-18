const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;



// For visual studio
//mongodb+srv://admin:admin@linerpro.occtqoh.mongodb.net/test

//For Commpass
//mongodb+srv://admin:admin@linerpro.occtqoh.mongodb.net/test
//email Varification
//abdulraheemzxcv@gmail.com
//shwkszfdgkccaioz
