import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import useConversation from '../../hooks/useConversation';
import { useConversationContext } from '../../context/ConversationContext';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation, lastIdx}) => {
const {conversationSelected,setConversationSelected} = useConversationContext();
	const { selectedConversation, setSelectedConversation } = useConversation();
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
 			<div
				className={` flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				
			`}onClick={()=>{sessionStorage.setItem("selectedConversation", JSON.stringify(conversation)); setSelectedConversation(conversation); setConversationSelected(conversation)}}
			>
 				<div className={`avatar ${isOnline?"online":""}`}>
 					<div className={`w-12 rounded-full`}>
 						<img
						src={conversation.avatar}
 							alt='user avatar'
 						/>
 					</div>
 				</div>

 				<div className={`flex flex-col flex-1`}>
 					<div className={`flex gap-3 justify-between`}>
 						<p className={`font-bold text-black`}>{conversation.fullname}</p>
 					</div>
 				</div>
 			</div>
			{!lastIdx 
			&& 
 			<div className={`divider my-0 py-0 h-1`} />
			
			}
 		</>
  )
}

export default Conversation