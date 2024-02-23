import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import WekcomeHome from './WekcomeHome'

const MessageContainer = () => {
  return (
   
    <div className={`md:min-w-[450px] flex flex-col`}>
       <WekcomeHome/>  <>
        <div className={`bg-slate-500 px-4 py-3 mb-2`}>
<span className={`text-gray-800 font-bold`}>Username</span>
        </div>

        <Messages/>
        
        <MessageInput/>
        </>
    </div>
  )
}

export default MessageContainer