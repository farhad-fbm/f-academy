import React from 'react'
import AuthForm from './AuthForm';

const SignUp = () => {
  return (
    <AuthForm
      greeting="Create New Account"
      subBtn="Create Account"
      isAcc="Already have an account?"
      switchBtn=" Sign In Here"
      page="up"

    />
  )
}

export default SignUp
