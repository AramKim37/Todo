import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Must provide a username"],
    unique: [true, "Username must be unique"],
  },
  email: {
    type: String,
    required: [true, "Must provide a email"],
    unique: [true, "Username must be email"],
  },
  password: {
    type: String,
    required: [true, "Must provide a password"],
  },
});
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
