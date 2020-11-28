import React/* , { useState, useEffect } */ from 'react';
// import { Link } from 'react-router-dom';

import './sign-up.css';

const SignUp = ({ error, setError }) => {
    /* const [ nick, setNick ] = useState('');
    const [ show, setShow ] = useState(false);
    const [ noNick, setNoNick ] = useState(false);

    // set the local state depending on whether there is an error
    useEffect( () => {

        if (error) {
            setShow(true);
        } else {
            setShow(false);
        }

    }, [ show, error ]);

    // useEffect to setTimeOut for the non-unique nick notification
    useEffect( () => {

        if(show) {
            const timer = setTimeout( () => {
                setShow(false);
                setError('');
            }, 5000);

            return () => clearTimeout(timer);
        }

    }, [ show, setError ] );

    // useEffect to setTimeOut for the invalid signin notification
    useEffect( () => {

        if(noNick) {
            const timer = setTimeout( () => {
                setNoNick(false);
            }, 5000);

            return () => clearTimeout(timer);
        }

    }, [noNick] );
 */
    return(
        <div className='sign-up-div'>
            {/* <div className={
                `alert ${ show ? 
                    'show showAlert' :  
                    'hide' 
                }`}
            >
                <span className="fas fa-exclamation-circle"></span>
                <span className="msg">{error}</span>
                <div className="close-btn">
                    <span className="fas fa-times" onClick={ () => {
                        setShow(false);
                        setError('');
                    } }></span>
                </div>
            </div>
            <div className={`no-nick ${ noNick ? 'nickAlert' : 'hidden' }`}>
                <span className="no-nick-msg">You need to type in a nickname</span>
                <span className="fas fa-times" onClick={ () => setNoNick(false) }></span>
            </div>
            <div className="sign-up-div-inner">
                <h1 className='heading'>Welcome to My Chat App</h1>
                <div>
                    <label className='label'>Note: nickname must be unique!</label>
                    <input className='nickname-input' placeholder='Type your unique nickname here' type="text" 
                        onChange={ e => {
                            setNick(e.target.value)
                        }} 
                    />
                </div>
                <Link to={`/chat?nick=${nick}`}                     
                    onClick={ (e) => {
                        if(!nick) {
                            e.preventDefault();
                            setNoNick(true);
                        }                            
                    } }>
                    <button className='sign-in' type='submit'>Sign In</button>
                </Link>
            </div> */}
        </div>   
    )
}

export default SignUp;

