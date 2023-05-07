import { Avatar } from '@material-ui/core';
import React from 'react'
import './SidebarChat.css';

const Sidebarchar = () => {
  return (
    <div className='sidebarChat'>
      <Avatar />
      <div className='sidebarChat__info'>
        <h2>Room Name</h2>
        <p>This message is deleted</p>
      </div>
    </div>
  )
}

export default Sidebarchar