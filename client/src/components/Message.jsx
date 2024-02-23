import React from 'react'

const Message = () => {
  return (
    <div className={`chat chat-start`}>
<div className={`chat-image avatar`}>
<div className={`w-10 rounded-full`}> <img src={`https://media.geeksforgeeks.org/gfg-gg-logo.svg`} alt="" srcset="" /></div>
</div>
<div className={`chat-bubble text-white bg-green-500`}>
    what up NIGGA
</div>
<div className={`chat-footer opacity-50 text-xs flex justify-end items-center gap-1`}>Date</div>
    </div>
  )
}

export default Message