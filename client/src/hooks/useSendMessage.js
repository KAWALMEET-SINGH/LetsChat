import { useState } from "react";
import toast from "react-hot-toast";
import { useConversationContext } from "../context/ConversationContext";

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages } = useConversationContext();
const selectedConversation = JSON.parse(sessionStorage.getItem("selectedConversation"))
	const sendMessage = async (message) => {
		setLoading(true);
		try {
			const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ message }),
			});
			const data = await res.json();
			if (data.error) throw new Error(data.error);
            sessionStorage.setItem("messages",JSON.stringify(messages))

			setMessages([...messages, data]);
            
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};
export default useSendMessage;