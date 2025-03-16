import React from 'react'
import './Landing.css'
import heart from '/Users/User/healthcare-medico/src/assets/heart.png'

const Landing = () => {
  return (
    <div className='body'>
      <div className='navbar'>
        <img src='' />
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
        <button type='button'>Login/Signup</button>
      </div>
      <div className="back">
        <div className="tagline">
          <h1>Medico</h1>
          <h4>Care Without Limits.</h4>
        </div>
        <div className="info"><p>Medico connects patients with doctors worldwide, making healthcare accessible anytime, anywhere. Whether you’re at home or on the go, Medico ensures you receive trusted, professional care when you need it most.</p></div>
        <img className='heart' src={heart}></img>
      </div>
    </div>
  )
}

export default Landing
