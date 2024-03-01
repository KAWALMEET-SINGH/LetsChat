import {  createContext, useContext, useEffect, useState } from "react";

export const ConversationContext = createContext();

export const useConversationContext =() =>{
    return useContext(ConversationContext);
}

export const ConversationContextProvider = ({children}) =>{
    const [conversationSelected,setConversationSelected] = useState(JSON.parse(sessionStorage.getItem('selectedConversation')) || null);
  const [messages,setMessages] = useState(JSON.parse(sessionStorage.getItem('messages'))||null)
    return <ConversationContext.Provider value={{conversationSelected,setConversationSelected,messages,setMessages} }> {children}</ConversationContext.Provider>
}