import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);

  //form data populated in one object, instead of having two seperate states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  // destructuring email and password from formData object
  const {name, email, password} = formData;

  // e.target.id distinguishes between email and password. 
  // if the id is email, then the email state will change. If id is password, that will update
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const navigate = useNavigate();

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Create An Account!</p>
        </header>
        <form>
        <input type='text' 
          placeholder='Name' 
          className='nameInput' 
          id='name' 
          value={name} 
          onChange={handleChange} />

          <input type='email' 
          placeholder='E-mail' 
          className='emailInput' 
          id='email' 
          value={email} 
          onChange={handleChange} />

          <div className='passwordInputDiv'>
            <input type={showPassword ? 'text' : 'password'} 
            className='passwordInput' 
            placeholder='Password'
            id='password' 
            value={password}
            onChange={handleChange} />

            <img src={visibilityIcon} 
            alt='Show Password' 
            className='showPassword'
            onClick={() => setShowPassword((prevState) => !prevState)} />
          </div>

          <Link to='/forgot-password' className='forgotPasswordLink'>Forgot Password</Link>

          <div className='signUpBar'>
            <p className='signUpText'>Sign Up</p>
            <button className='signInButton'>
              <ArrowRightIcon fill='white' width='34px' height='34px' />
            </button>
          </div>

        </form>
        <h3 className='text-align-center'>Already have an account? <Link to='/login' className='registerLink'>Log In Here</Link></h3>
      </div>
    </>
  )
}

export default Signup