import React from 'react'
import {Link ,  useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button,Input , Logo} from "./index"
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from "react-hook-form"
import { useState } from 'react'

const Login = () => {
       console.log("hii manjeet");
       

       const navigate = useNavigate()
       const dispatch = useDispatch()
       const {register, handleSubmit} = useForm()
       const [error,setError] = useState("")
       
       const login = async(data) => {
              // console.log(data);
              
              setError("")
              try {
                     const session = await authService.login(data)
                     // console.log("session :\n",session);
                     

                     if(session){
                            const userData = await authService.getCurrentUser()
                            // console.log("userData :\n",userData);

                            if(userData) dispatch(authLogin(userData));
                            navigate("/")
                     }
              } catch (err) {
                     setError(err.message)
                     
              }
       }

  return (
    <div className='flex items-center '>
      <div className="">
              <div className="">
                     <span>
                            <Logo/>
                     </span>
              </div>
              <h2>sign in to your account</h2>
              <p>
                     Don&apos;t have any account ?&nbsp;

                     <Link to={"/signup"}>
                            sign Up
                     </Link>
              </p>
              {
                     error && 
                     <p>{error}</p>
                     
              }
              <form action=" " onSubmit={handleSubmit(login)}>
                     <div className="">
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
                            <Button type='submit' > Sign In  </Button>
                     </div>
              </form>
      </div>
    </div>
  )
}

export default Login

