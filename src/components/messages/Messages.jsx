import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../message/Message';

import './messages.css';

const Messages = ({ messages, nick }) => {

    return (
        <ScrollToBottom className='messages'>
            {
                messages.map( (message, index) => <Message key={index} message={message} nick={nick} /> )
            }
        </ScrollToBottom>
    )

}

export default Messages;