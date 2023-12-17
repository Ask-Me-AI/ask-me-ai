import React from 'react'
import './Signup.css'
import askmeai_logo from '../assets/askmeai_logo.png'

function Signup() {
  return (
    <div className="container">
    <div className="header">
        <img className='logo' src={askmeai_logo} alt="askmeai_logo" />
        <div className="text">Create your account</div>
    </div>
    <div className="inputs">
        <div className="input">
            <input type="text" placeholder='Username'/>
        </div>
        <div className="input">
            <input type="password" placeholder='Password'/>
        </div>
    </div>
   <div className="radio-container">
    <div className="radios">
        <input className='custom-radio' type="radio" />
        <label htmlFor="">Student</label>
    </div>
    <div className="radios">
        <input className='custom-radio' type="radio" />
        <label htmlFor="">Instructor</label>
    </div>
    <div className="radios">
        <input className='custom-radio' type="radio" />
        <label htmlFor="">Others</label>
    </div>
   </div>

    <div className="submit-container">
        <div className="submit">Sign Up</div>
    </div>

    <div className="already-account">Already have an account? <span>Log in</span></div>
</div>
  )
}

export default Signup