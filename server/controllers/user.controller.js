import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res, next) => {
  try {
    const loggedInUserId = req.user._id;
    const filterdAllUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
    res.status(201).json(filterdAllUsers);
  } catch (error) {
    next(error);
  }
};
