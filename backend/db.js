const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb+srv://Sravan:Sravan%4028@cluster0.7mrce.mongodb.net/paytm");
};



module.exports = connectDB;
