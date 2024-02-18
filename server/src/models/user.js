const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: "Full name is required" },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
  },
  //  isEmailVerified: { type: Boolean, default: false },
  password: {
    type: String,
    required: true,
    select: false,
  },
  roles: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
    required: true,
  },
  // isActive: { type: Boolean, default: true, required: true}
});

const User = mongoose.model("User", userSchema);
module.exports = User;
