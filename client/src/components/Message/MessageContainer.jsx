import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import WekcomeHome from '../WekcomeHome'
import { useConversationContext } from '../../context/ConversationContext'
import useGetMessages from '../../hooks/useGetMessages'

const MessageContainer = () => {
  const selectedConversation = JSON.parse(sessionStorage.getItem('selectedConversation')) ;
 
  return (
   
    <> <div className={`md:min-w-[450px] flex flex-col`}>
      {selectedConversation?(<><div className={`bg-slate-500 px-4 py-3 mb-2`}>
<span className={`text-gray-800 font-bold`}>{selectedConversation.fullname}</span>
        </div>

        <Messages/>
        
        <MessageInput/>
        </>) :(<WekcomeHome/>) }
       
        
       
       
    </div> </>
  )
}

export default MessageContainer