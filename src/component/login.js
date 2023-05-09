import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './LoginValidation';


function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-dark bg-gradient vh-100'>
      <div className='bg-secondary bg-gradient p-3 rounded w-25'>
        <h2>Sign-In</h2>
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="email"><strong>Email </strong></label>
                <input type="email" placeholder='Enter Email' name='email'
                onChange={handleInput} className='form-control rounded-0'/>
                {errors.email && <span className='text-dark'> {errors.email} </span> }
            </div>
            <div className='mb-3'>
                <label htmlFor="password"><strong> Password </strong></label>
                <input type="password" placeholder='Enter password' name='password'
                onChange={handleInput} className='form-control rounded-0'/>
                {errors.password && <span className='text-dark'> {errors.password} </span> }
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-3'><strong>Log in </strong></button>
            <div className='my-2'>
            <input className="form-check-input mx-2" type="checkbox" value="" id="flexCheckDefault" required autoFocus></input>
            <label className="form-check-label" for="flexCheckDefault">
            You agreed to our terms and policies.
            </label>
            </div>
            <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-3 text-decoration-none'><strong> Create Account </strong></Link>
        </form>
      </div>
    </div>
  )
}

export default Login