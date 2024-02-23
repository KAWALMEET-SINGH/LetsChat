import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import { createToken } from "../utils/createToken.js";
export const signIn = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const validUser = await User.findOne({ username });
    if (!validUser) {
      return next(errorHandler(404, "User Not Found"));
    }
    const validPassword =  bcryptjs.compareSync(password,validUser.password)
    if (!validPassword) {
        return next(errorHandler(401, "Invaild Password "));
      }
    createToken(validUser._id,res)
      const { password: pord, ...rest } = validUser._doc;
      res
        .status(200)
        .json(rest);
  } catch (error) {
    next(error);
  }
};
export const signUp = async (req, res, next) => {
  try {
    const { fullname, username, password, gender, email , confirmPassword } = req.body;
    if (password !== confirmPassword){
        return next(errorHandler(400, "Passwords donot match"));
 
    }
    const user = await User.findOne({ username });
    if (user) {
      return next(errorHandler(400, "Username Already Exists"));
    }
    const hashedPassword = bcryptjs.hashSync(password, 12);
    const newUser = new User({
      username,
      fullname,
      password: hashedPassword,
      gender,
      email,
    });
    await newUser.save();
    createToken(newUser._id,res)

    const { password: pord, ...rest } = newUser._doc;
    res
      .status(201)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
export const signOut = async (req, res, next) => {
  try {
     res.clearCookie("access_token")
    res.status(200).json({message:"Successfully Logged Out"})

  } catch (error) {
    next(error)
  }
};
