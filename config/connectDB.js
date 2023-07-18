const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://ecommerce:qUonLF2mL3jkBHVD@ecommerce.ilftfyl.mongodb.net/Task-Manager?retryWrites=true&w=majority"
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
};

module.exports = connectDB;
