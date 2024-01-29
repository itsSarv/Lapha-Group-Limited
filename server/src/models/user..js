const mongoose = require('mongoose')
const { Schema } = mongoose;
validateEmail = require("./user.validation")

const userSchema = new Schema({
    name: { type: String, required: "Full name is required" },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Email address is required",
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
  //  isEmailVerified: { type: Boolean, default: false },
    password: {
      type: String,
      required: true,
      select: false,
    },
    roles:{type:String, enum:['user', 'admin'], default:'user', required:true},
   // isActive: { type: Boolean, default: true, required: true}
  });
  
  module.exports = model("User", userSchema);
  
