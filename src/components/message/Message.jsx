import React from 'react';
import ReactEmoji from 'react-emoji';

import './message.css';

const Message = ({ message: { user, msg }, nick }) => {
    let isSentByCurrentUser = false;
    const currentUserNick = nick.trim().toLowerCase();

    // user contains the nick of the person that sent the message
    // nick contains the nick of the person that is currently signed in to this socket
    // connection
    if(currentUserNick === user) {
        isSentByCurrentUser = true;
    }
    return (
        isSentByCurrentUser ? (
            <div className="messageContainer justifyEnd">
                <p className="userName pr-10">{currentUserNick}</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{ReactEmoji.emojify(msg)}</p>
                </div>
            </div>
        ) : (
            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{ReactEmoji.emojify(msg)}</p>
                </div>
                <p className="userName pl-10">{user}</p>
            </div>
        )
    )
}

export default Message;