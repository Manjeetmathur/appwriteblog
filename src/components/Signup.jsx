import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link,useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import {Button , Input , Logo} from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'


const Signup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error,setError] = useState("")
  const {register , handleSubmit} = useForm()

  const create = async(data) => {

    console.log(data);
    
    setError("")
    try {
      const userData = await authService.createAccount(data)
      if(userData){
        const userData = await authService.getCurrentUser()
        if(userData){
          dispatch(login(userData))
          navigate("/")
        }
      }
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <div className=''>
      <div className="">
        <div className="">
          <span>
            <Logo/>
          </span>
        </div>
        <h2>sign in to your account</h2>
          <p>
              Already have an account ?&nbsp;
                <Link to={"/login"}>
                  login
                </Link>
          </p>
          {
            error && 
            <p>{error}</p>
          }
          <form onSubmit={handleSubmit(create)}>
            
            <div className="">
              <Input
                label = "Full Name : "
                placeholder = "Enter your full name : "
                type = 'text'
                { ...register( "name", {
                  required : true,
                  
                })}
              />
               <Input
                  label = "Email : "
                  placeholder = "Enter your email"
                  type = "email"
                  {...register("email", {
                        required : true,
                        validate : {
                          matchPattern : (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)  ||
                          "email address must be a valid address"
                        }
                  })}
                />
                <Input
                  label = "Password : "
                  placeholder = "Enter your password"
                  type = "password"
                  {...register("password", {
                    required : true,
                  })}
                />
                <Button type='submit' > Create Account  </Button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Signup
