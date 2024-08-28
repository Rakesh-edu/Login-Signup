import React, { useState } from 'react'
import './Loginsignup.css';
import user_icon from '../../Assets/person.png'
import email_icon from '../../Assets/email.png'
import password_icon from '../../Assets/password.png'

const Loginsignup = () => {
    const [action,setAction]=useState("SignUp")
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Username'/>
            </div>
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email Id' />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        <div className="forgot-password">Forgot Password <span>Click Here?</span></div>
        <div className="submit-container">
         
            <div className={action==="login"?"submit gray":"submit"} onClick={()=>{setAction("SignUp")}}>Signup</div>
            <div className={action==="SignUp"?"submit gray":"submit"} onClick={()=>{setAction("login")}}>Login</div>
        </div>
    </div>
  )
}

export default Loginsignup