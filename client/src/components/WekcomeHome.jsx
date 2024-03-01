import React from 'react'
import { TiMessages } from "react-icons/ti";
const WekcomeHome = () => {
	const user = JSON.parse(sessionStorage.getItem("auth_user"));
	return (
    <div className={`flex items-center justify-center text-black w-full h-full`}>
			<div className={`px-4 text-center text-black sm:text-lg md:text-xl font-semibold flex flex-col items-center gap-2`}>
				<p>Welcome {user.fullname} </p>
				<p>Select a chat to start messaging</p>
				<TiMessages className={`text-3xl text-black md:text-6xl text-center`} />
			</div>
		</div>
  )
}

export default WekcomeHome