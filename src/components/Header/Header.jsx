import React from 'react'
import "./Header.css";
import { IconButton } from '@mui/material';
function Header({ logo, user }) {
    console.log(user);
    return <div className='home__header'>
        <div className='logo__title'>
            <img className="logo" src={logo} />
            <h1>ReactChat</h1>
        </div>
        <div className='searchbar__container'>
            <input  type="search" className="search__bar" placeholder="search users" />
                <button className='search__btn'>Search</button>
        </div>
        
        <div className='user__profile'>
            <img src="https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym95c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="user profile" />
        </div>
    </div>
}
    export default Header;