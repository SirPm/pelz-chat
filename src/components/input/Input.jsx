import React from 'react';

import './input.css';

const Input = ({ message, setMessage, setTypingStatus, sendMessage }) => {
    return (
        <form className='form'>
            <input 
                className='input'
                type='text'
                placeholder='Type message here...'
                value={message}
                onChange={ e => setMessage(e.target.value) }
                onKeyDown={ () => setTypingStatus(true)}
                onKeyUp={ () => setTypingStatus(false) }
            />
            <button className="sendButton" onClick={ e => sendMessage(e) }>Send</button>
        </form>
    )
}

export default Input;