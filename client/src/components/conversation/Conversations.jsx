import React, { useEffect, useState } from "react";
import Conversation from "./Conversation";
import toast from "react-hot-toast";
import useGetConversations from "../../hooks/useGetConversation";
import { useConversationContext } from "../../context/ConversationContext";


const Conversations = () => {
  const { loading,conversations } = useGetConversations();
  
  const user = JSON.parse(sessionStorage.getItem("auth_user"));
   // const conversations = JSON.parse(sessionStorage.getItem("user_conversations"))

  // console.log(conversations);


  return (
    <div className={`py-2 flex flex-col overflow-auto`}>
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

    </div>
  );
};

export default Conversations;
