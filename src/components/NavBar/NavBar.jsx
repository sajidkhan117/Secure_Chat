import React from 'react'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import DuoIcon from '@mui/icons-material/Duo';
import UpdateIcon from '@mui/icons-material/Update';
import { IconButton } from '@mui/material';
import "./NavBar.css";

function NavBar() {
  return (
      <div className='nav__bar'>
          <IconButton style={{color:"lightgreen"}}  className="blur__icon"><ChatBubbleIcon /></IconButton>
          <IconButton style={{color:"lightgreen"}} className='blur__icon'> <DuoIcon /></IconButton>
          <IconButton style={{color:"lightgreen"}} className="blur__icon"><UpdateIcon /></IconButton>  
    </div>
  )
}

export default NavBar;