import React,{useState} from 'react'
import { FaSearch } from "react-icons/fa";
import toast from "react-hot-toast";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const selectedConversation = JSON.parse(sessionStorage.getItem("selectedConversation"))
  const conversations = JSON.parse(sessionStorage.getItem("user_conversations"))
console.log(conversations);
  const handleSubmit = (e) => {
		e.preventDefault();
    if (!search || !conversations) return; 
		const conversation = conversations.find(
      (c) => c.fullname?.toLowerCase().includes(search.toLowerCase())
    ) || [];
    
    if (conversation) {
			sessionStorage.setItem(`user_conversations`,JSON.stringify(conversation))
			setSearch("");
		} else toast.error("No user found!");}
  
  return (
    <form onSubmit={handleSubmit} className={`flex items-center gap-2`}>
        <input type='text' placeholder='Search...' value={search}
				onChange={(e) => setSearch(e.target.value)} className={`input input-bordered rounded-full`}/>
        <button type='submit' className={`btn btn-circle bg-sky-600 text-white`}><FaSearch/></button>
    </form>
  )
}

export default SearchBar