import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios';

import signinImage from '../assets/signup.jpg'

const Auth = () => {
    const [isSignup, setIsSignup] = useState(true);

    const handleChange = () => {}

    const switchMode =() => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
    }
    
    return (
        <div className='auth__form-container'>
            <div className='auth__form-container_fields'>
                <div className='auth__form-container_fields-content'>
                    <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
                    <form onSubmit={() => {}}>
                        {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor="fullName">full name</label>
                                <input name='fullName' 
                                type="text"
                                placeholder='full name'
                                onChange={handleChange}
                                required
                                 />
                            </div>
                        )}
                        <div className='auth__form-container_fields-content_input'>
                                <label htmlFor="username">user name</label>
                                <input name='username' 
                                type="text"
                                placeholder='user name'
                                onChange={handleChange}
                                required
                                 />
                        </div>
                        {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input name='phoneNumber' 
                                type="text"
                                placeholder='phone number'
                                onChange={handleChange}
                                required
                                 />
                            </div>
                        )}
                        {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor="avatarURL">avatar url</label>
                                <input name='avatarURL' 
                                type="text"
                                placeholder='avatar url'
                                onChange={handleChange}
                                required
                                 />
                            </div>
                        )}
                        <div className='auth__form-container_fields-content_input'>
                                <label htmlFor="password">password</label>
                                <input name='password' 
                                type="text"
                                placeholder='password'
                                onChange={handleChange}
                                required
                                 />
                        </div>
                        {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor="confirmPassword">confirm password</label>
                                <input name='confirmPassword' 
                                type="text"
                                placeholder='confirm password'
                                onChange={handleChange}
                                required
                                 />
                            </div>
                        )}
                    </form>
                    <div className='auth__form-container_fields-account'>
                        <p>
                            {isSignup 
                            ? "already have an account?" 
                            : "don't have an account?"}
                            <span onClick={switchMode}>
                                {isSignup ? 'sign in' : 'sign out'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='auth__form-container_image'>
                <img src={signinImage}></img>
            </div>
        </div>
    )
}

export default Auth

