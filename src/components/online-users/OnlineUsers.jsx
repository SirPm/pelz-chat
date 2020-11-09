import React, { useState } from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './online-users.css';

const OnlineUsers = ({ users }) => {
    const [ open, setOpen ] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    }

    return (
        <div className='onlineUsersContainer'>
            <div className="menu-btn" onClick={toggleMenu}>
                <span className={` ${ open ? 'open' : '' }  menu-btn__burger`}></span>
            </div>

            <nav className={` ${ open ? 'open' : '' } nav`}>                
                <h3 className='nav-heading'>People currently chatting:</h3>
                {
                    users ? (                        
                        <ul className={` ${ open ? 'open' : '' } menu-nav`}>
                            {
                                users.map( ({nick}) => (
                                    <li className={` ${ open ? 'open' : '' } activeItem menu-nav__item`} key={nick}>
                                        <span className="menu-nav__link">{nick}</span>
                                        <img alt="Online Icon" src={onlineIcon}/>
                                    </li>
                                ))
                            }
                        </ul>
                    ) : null
                }            
                <div className="sign-out-mobile">
                    <i className="fas fa-power-off"></i>
                    <span>Sign Out</span>
                </div>
            </nav>
        </div>
    )
}

export default OnlineUsers;
