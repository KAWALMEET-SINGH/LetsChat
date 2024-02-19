import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    username: { type: String, required: true, unique: true },

    password: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    avatar: {
      type: String,
      default:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.1772590081.1698562903&semt=ais",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
