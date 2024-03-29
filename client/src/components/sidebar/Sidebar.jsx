import React from 'react'
import SearchBar from './SearchBar'
import Logout from './Logout'
import Conversations from '../conversation/Conversations'

const Sidebar = () => {
  return (
    <div className={`border-r border-slate-500 p-4 flex flex-col`}>
        <SearchBar/>
        <div className={`divider px-3`}></div>
        <Conversations/>
        <Logout/>
    </div>
  )
}

export default Sidebar