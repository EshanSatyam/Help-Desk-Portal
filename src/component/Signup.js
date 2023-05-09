import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation';
// import axios from 'axios';


function Signup() {

    const [values, setValues] = useState({
        name : '',
        email: '',
        password: ''
    })
    const navigate = useNavigate;
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.name === "" && errors.email === "" && errors.password === ""){
        //   axios.post('http://localhost:3300/signup' , values)
        //   .then(res => {
        //           navigate('/');
        //   })
        //   .catch(err => console.log(err))
        }
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary bg-gradient vh-100'>
    <div className='bg-dark bg-gradient p-3 rounded w-25 text-light'>
        <h2>Sign-Up</h2>
      <form action="" onSubmit={handleSubmit}>
         <div className='mb-3'>
              <label htmlFor="name"><strong>Name </strong></label>
              <input type="text" placeholder='Enter Name' name='name'
             onChange={handleInput} className='form-control rounded-0'/>
             {errors.name && <span className='text-light'> {errors.name} </span> }
          </div>
          <div className='mb-3'>
              <label htmlFor="email"><strong>Email </strong></label>
              <input type="email" placeholder='Enter Email' name='email'
             onChange={handleInput} className='form-control rounded-0'/>
             {errors.email && <span className='text-light'> {errors.email} </span> }
          </div>
          <div className='mb-3'>
              <label htmlFor="employeeId"><strong>Employee Id </strong></label>
              <input type="number" placeholder='Enter Employee Id' name='employeeId'
             onChange={handleInput} className='form-control rounded-0'/>
             {errors.name && <span className='text-light'>Employee Id Should not be empty</span> }
          </div>
          <div className='mb-3'>
              <label htmlFor="password"><strong> Password </strong></label>
              <input type="password" placeholder='Enter password' name='password'
             onChange={handleInput} className='form-control rounded-0'/>
             {errors.password && <span className='text-light'> {errors.password} </span> }
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-3'><strong>Sign up </strong></button>
          <div className='my-2'>
            <input className="form-check-input mx-2" type="checkbox" value="" id="flexCheckDefault" required autoFocus></input>
            <label className="form-check-label" for="flexCheckDefault">
            You agreed to our terms and policies.
            </label>
            </div>
          <Link to="/" className='btn btn-default border w-100 bg-primary rounded-3 text-decoration-none'><strong> Login </strong></Link>
      </form>
    </div>
  </div>
  )
}

export default Signup
