import React from 'react'
import SearchBar from './SearchBar'
import Logout from './Logout'
import Conversations from './Conversations'

const Sidebar = () => {
  return (
    <div>
        <SearchBar/>
        <div className={`divider px-3`}></div>
        <Conversations/>
        <Logout/>
    </div>
  )
}

export default Sidebar