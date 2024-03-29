import React,{useRef,useEffect} from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages';
import MessageLoader from './MessageLoader';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const {messages,loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
  return (
    <div className={`px-4 flex-1 overflow-auto`}>
      {messages?.success === false && (
				<p className={`text-center text-black`}>Send a message to start the conversation</p>
			)} {!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef} >
						<Message message={message} />
					</div>
				))

       }
       {
        loading &&
        [...Array(3)].map((_, idx) => <MessageLoader key={idx} />)
       }
       
        
        </div>
  )
}

export default Messages