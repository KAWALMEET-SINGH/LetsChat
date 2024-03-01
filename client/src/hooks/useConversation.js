import { useState, useEffect } from 'react';

const useConversation = () => {
  const [selectedConversation, setSelectedConversation] = useState(
    () => JSON.parse(sessionStorage.getItem('selectedConversation')) || false
  );
  const [messages, setMessages] = useState(
    () => JSON.parse(sessionStorage.getItem('messages')) || []
  );

  useEffect(() => {
    sessionStorage.setItem('selectedConversation', JSON.stringify(selectedConversation));
    sessionStorage.setItem('messages', JSON.stringify(messages));
  }, [selectedConversation,messages]);

  return {
    selectedConversation,
    setSelectedConversation,
    messages,
    setMessages,
  };
};

export default useConversation;
