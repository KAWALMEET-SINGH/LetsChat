import React from 'react'
import { FormatTime } from '../utils/FormatTime';

const Message = ({message}) => {
  const authUser = JSON.parse(sessionStorage.getItem("auth_user"));
  const selectedConversation = JSON.parse(sessionStorage.getItem("selectedConversation"))
  const authUserMessage = message.senderId === authUser._id; 
  return (
    <div className={`chat ${authUserMessage ? 'chat-end':'chat-start' } `}>
<div className={`chat-image avatar`}>
<div className={`w-10 rounded-full`}> <img src={`${authUserMessage ? authUser.avatar :selectedConversation.avatar }`} alt=""  /></div>
</div>
<div className={`chat-bubble text-white  ${authUserMessage ? 'bg-green-500':'bg-blue-500' } `}>
{message.message}
</div>
<div className={`chat-footer opacity-50 text-xs flex justify-end items-center gap-1 text-black`}>{FormatTime(message.createdAt)}</div>
    </div>
  )
}

export default Message