import React from 'react'
import { useNavigate } from 'react-router'

export const LoginPage = () => {

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/marvel')
  }

  return (
    <div className='container p-20'>
        <h1>LoginPAge</h1>
        <hr />

        <button onClick={handleLogin} className='p-5 mt-10 bg-blue-500 text-white'>Login</button>
    </div>
  )
}
