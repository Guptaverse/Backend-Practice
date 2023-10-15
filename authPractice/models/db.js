const mongoose = require("mongoose");

const dbSchema = new mongoose.Schema(
  {
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
  }
);

const AUTH = mongoose.model("auth", dbSchema);

module.exports = AUTH;