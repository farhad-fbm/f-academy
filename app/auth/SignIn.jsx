import React from 'react'
import AuthForm from './AuthForm';


const SignIn = () => {
  return (
    <AuthForm
      greeting="Welcome Back"
      subBtn="Sign In"
      isAcc="Don't have an account?"
      switchBtn=" Sign Up Here"
      page="in"

    />
  )
}

export default SignIn;
