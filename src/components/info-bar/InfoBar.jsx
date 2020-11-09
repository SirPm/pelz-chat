import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './info-bar.css';

const InfoBar = ({ nick, typingMsg }) => {

    return(
        <div className='infoBar'>
            <div className="leftInnerContainer">
                <img src={onlineIcon} className='onlineIcon' alt="onlineIcon"/>
                <span className="nick">{nick}</span>
                <span className='typing'>{typingMsg}</span>
            </div>
            <a href="/" className="sign-out">
                <i className="fas fa-power-off"></i>
                <span>Sign Out</span>
            </a>
        </div>
    )
}

export default InfoBar;