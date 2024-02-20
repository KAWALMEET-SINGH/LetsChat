import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { errorHandler } from "../utils/error.js";

export const sendMessage = async (req, res, next) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage =  new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
      
    }

    await Promise.all([conversation.save(),newMessage.save()])

    res.status(201).json(newMessage );
  } catch (error) {
    next(error);
  }
};

export const getMessage = async(req,res,next) =>{
    try {
        const {id: UserId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all:[UserId,senderId]}
        }).populate("messages");
        if (!conversation) {
          return next(errorHandler(200,[]))
        }
        const messages = conversation.messages
        res.status(200).json(messages)
    } catch (error) {
        next(error)
    }
}
