import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideocallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';




function Header() {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className='header'>
            <div className='header__left'>
                <MenuIcon />  
                <Link to='/'>          
                <img 
                className='header__logo' 
                src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg' 
                alt='youtube-logo' />
                </Link>
            
            </div>
            <div className='header__input'>
                <input onChange={(e) => setInputSearch(e.target.value)}
                value={inputSearch}
                placeholder='Seacrh'
                type='text'
                />

                <Link to={`/search/${inputSearch}`}>
                <SearchIcon className='search__button'/>
                </Link>
            </div>

            <div className='header__icons'>
                <VideocallIcon className='header__icon' />
                <AppsIcon className='header__icon' />
                <NotificationsIcon className='header__icon' />
                <Avatar alt='User'
                src='https://www.pngarts.com/files/5/Cartoon-Avatar-Transparent-Image.png' className='header__icon' />
            </div>



        </div>
    )
}

export default Header;