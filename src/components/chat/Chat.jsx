import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';

import InfoBar from '../info-bar/InfoBar';
import Messages from '../messages/Messages';
import Input from '../input/Input';
import OnlineUsers from '../online-users/OnlineUsers';

import './chat.css';

let socket;

const Chat = ({ location }) => {
    // all states to be used
    const [ nick, setNick ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ messages, setMessages ] = useState([]);
    const [ users, setUsers ] = useState('');
    const [ typingStatus, setTypingStatus ] = useState(false);
    const [ typingMsg, setTypingMsg ] = useState('');

    // the host that the server is running on
    const ENDPOINT = 'https://pelz-chat.herokuapp.com/';

    // sign in the user and sign out the user when they disconnect
    useEffect( () => {
        const { nick } = queryString.parse(location.search);
        
        setNick(nick);

        socket = io(ENDPOINT);
        socket.emit('signin', { nick }, () => {

        });

        return () => {
            socket.emit('disconnect') 
            socket.off()
        }
    }, [ENDPOINT, location.search] );

    // listen for message from the server
    useEffect( () => {
        socket.on('sendMsgFromServer', (message) => {
            setMessages([...messages, message]);
        })

    }, [messages] );

    // listen for usersData event from the backend containing the users that are in the chat
    useEffect( () => {      
        socket.on('usersData', ({ users }) => {
            setUsers(users)
        })
    })

    // emit the typing state to the backend
    useEffect( () => {
        if (typingStatus) {
            socket.emit( 'typing', { typing: true }, () => setTypingStatus(false) );
        } else {
            socket.emit( 'typing', { typing: false } );
        }
    })

    // listen for a typing message from backend which could be empty or contain the 
    // a message with the user that is typing
    useEffect( () => {
        socket.on( 'sendTypingMsg', (message) => {
          setTypingMsg(message);
        })
    })
    

    const sendMessage = (e) => {
        e.preventDefault();

        if(message) {
            socket.emit('sendMsgFromClient', message, () => setMessage('') );
        }
    }

    return(
        <div className="chat-div">
            <OnlineUsers users={users} />
            <div className='container'>
                <InfoBar nick={nick} typingMsg={typingMsg} />
                <Messages messages={messages} nick={nick} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} setTypingStatus={setTypingStatus} />
            </div>
        </div>
    )
}

export default Chat;