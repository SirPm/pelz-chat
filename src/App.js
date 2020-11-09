import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignUp from './components/sign-up/SignUp';
import Chat from './components/chat/Chat';


const App = () => {
    return (
        <Router>
            <Route path='/' exact component={SignUp} />
            <Route path='/chat' component={Chat} />
        </Router>
    )
}

export default App;