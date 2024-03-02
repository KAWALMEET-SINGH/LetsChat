import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import MessageContainer from "../components/Message/MessageContainer";
import useGetConversations from "../hooks/useGetConversation";
import { useConversationContext } from "../context/ConversationContext";

const Home = () => {

  return (
    <div
      className={`flex sm:h-[350px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0`}
    >
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
