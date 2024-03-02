import {  createContext, useContext, useEffect, useState } from "react";

export const ConversationContext = createContext();

export const useConversationContext =() =>{
    return useContext(ConversationContext);
}

export const ConversationContextProvider = ({children}) =>{
    const [conversationSelected,setConversationSelected] = useState(JSON.parse(sessionStorage.getItem('selectedConversation')) || null);
    const [conversations,setConversations] = useState(JSON.parse(sessionStorage.getItem('user_conversations')) || null);
  const [messages,setMessages] = useState(JSON.parse(sessionStorage.getItem('messages'))||null)
    return <ConversationContext.Provider value={{conversationSelected,setConversationSelected,messages,setMessages,conversations,setConversations} }> {children}</ConversationContext.Provider>
}