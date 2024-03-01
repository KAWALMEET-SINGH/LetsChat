import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useConversationContext } from "../context/ConversationContext";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
    const selectedConversation = JSON.parse(sessionStorage.getItem("selectedConversation"));
	const { messages, setMessages } = useConversationContext();

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				const res = await fetch(`/api/messages/${selectedConversation._id}`);
				const data = await res.json();
				if (data.error) throw new Error(data.error);
                sessionStorage.setItem("messages",JSON.stringify(data))
				setMessages(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		if (selectedConversation?._id) getMessages();
	}, [selectedConversation?._id, setMessages]);

	return { messages, loading };
};
export default useGetMessages;