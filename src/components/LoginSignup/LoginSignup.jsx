import React, { useState } from 'react'
import './LoginSignup.css'
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginSignup = () => {
  
  const [choice, setChoice] = useState("Patient")
  const [action, setAction] = useState("Sign Up");

  return (
    <div className='wrapper'>
      <form action="">
      <button id='patient' className={choice=='Patient'?"filled":"empty"} type='button' onClick={()=>{setChoice('Patient')}}>Patient</button>
      <button id='doctor' className={choice=='Patient'?"empty":"filled"} type='button' onClick={()=>{setChoice('Doctor')}}>Doctor</button>
        <div className='window'>{action === 'Sign Up' ? "Log in" : "Sign Up"}</div>
        {action === 'Sign Up' ? <div></div> : <div className='input-box'>
          <input type='email' placeholder='Gmail' required />
          <MdEmail className='icon' />
        </div>}

        <div className='input-box'>
          <input type='text' placeholder='Username' required />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' required />
          <FaLock className='icon' />
        </div>
        <div className='remember-forgot'>
          <label><input type="checkbox" />Remember me</label>
          <a href='#'>Forgot password?</a>
        </div>
        <button type='submit'>{action === 'Sign Up' ? "Login" : "Sign up"}</button>
        <div className={action === 'Sign Up' ? "signup" : "login"}>
          <p>{action === 'Sign Up' ? "Don't have an account" : "Already have an account?"}
            <a href='#' onClick={() => { action === 'Sign Up' ? setAction("Log in") : setAction("Sign Up") }}>{action}</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginSignup
