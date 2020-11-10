import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignUp from './components/sign-up/SignUp';
import Chat from './components/chat/Chat';


const App = () => {
    const [ error, setError ] = useState('');

    return (
        <Router>
            <Route 
                path='/' 
                exact 
                render={ (props) => (
                    <SignUp { ...props } error={error} setError={ errorMsg => setError(errorMsg)} />
                )}
            />
            <Route 
                path='/chat' 
                render={ (props) => (
                    <Chat { ...props } setError={ errorMsg => setError(errorMsg)} />
                )} 
            />
        </Router>
    )
}

export default App;