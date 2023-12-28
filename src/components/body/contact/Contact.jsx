import React from 'react'

const Contact = () => {
  return (
    <div>
       <div className="sign-in">
    <div className="sign-in-head">Sign in to your account</div>
    <div className='linkblue'><p>Or  <a href="">sign up for a new account</a></p></div>
    <div className="sign-in-form">
      <div className="sign-in-form-input">  <div><label for="email">Email Address</label></div>
      <div><input type="email"></input></div>
      <div><label for="email">Password</label></div>
      <div><input type="email"></input></div>
    </div>
        <div className="checkbox">
            <div><input type="checkbox"></input><span> Remember me</span></div>
            <div className='linkblue'><a href="">Forgot your password?</a></div>
        </div>
        <div className="sign-in-form-button"><button>Sign in</button></div>
        <div className="app-head">
            <div className="app-head-border"></div>
            <div><span>Or continue with</span></div>
            <div className="app-head-border"></div>
        </div>
        <div className="sign-in-form-app">
            <div><button><i className="fa fa-github" aria-hidden="true"></i></button></div>
            
            <div><button><i className="fa fa-google" aria-hidden="true"></i></button></div>
        </div>
    </div>
 </div>
    </div>
  )
}

export default Contact
