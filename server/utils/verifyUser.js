import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";
import User from "../models/user.model.js";

export const verifyToken = async(req, res, next) => {
  try {
     const token = req.cookies.access_token;
  if (!token) {
    return next(errorHandler(401, "User not authenticated"));
  }
  const decoded =  jwt.verify(token, process.env.JWT_SECRET);
if (!decoded){
  return next(errorHandler(403,'Forbidded!!!'));
}
const user = await User.findById(decoded.id).select("-password")
req.user = user
next();  
} catch (error) {
    next(error)
  }
 
};
