import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './sign-up.css';

const SignUp = () => {
    const [nick, setNick] = useState('');

    return(
        <div className='sign-up-div'>
            <div className="sign-up-div-inner">
                <h1 className='heading'>Welcome to My Chat App</h1>
                <div>
                    <input className='nickname-input' placeholder='Type your nickname here' type="text" 
                        onChange={ e => {
                            setNick(e.target.value)
                        }} 
                    />
                </div>
                <Link to={`/chat?nick=${nick}`}                     
                    onClick={ 
                        e => (!nick) ? e.preventDefault() : null 
                    }>
                    <button className='sign-in' type='submit'>Sign In</button>
                </Link>
            </div>
        </div>   
    )
}

export default SignUp;

