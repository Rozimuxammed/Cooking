import React, { useState } from 'react'
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
import { uselogin } from '../../hooks/uselogin';
function Login({ setUser }) {
  const [icon, seticon] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState()
  const [visible, setVisible] = useState(false)
  const { loader, error, login } = uselogin()

  const handlesubmit = (e) => {
    e.preventDefault()

    login(email, password, setUser)
  }
  const changeIcon = () => {
    seticon(!icon)
  }
  return (
    <form onSubmit={handlesubmit}>
      <div className="container">
        <input required onChange={(e) => {
          setEmail(e.target.value)
        }} value={email} autoFocus type="email" placeholder='Email...' />
        <div className="password">
          <input required onChange={(e) => {
            setPassword(e.target.value)
          }} type={visible ? "text" : "password"} placeholder='Password...' />{icon ? <IoEyeSharp onClick={() => {
            changeIcon()
            setVisible(!visible)
          }} className='password_icon' /> : <FaEyeSlash onClick={() => {
            changeIcon()
            setVisible(!visible)
          }} className='password_icon' />}
        </div>
        <button>Login</button>
        
      </div>
    </form>
  )
}

export default Login