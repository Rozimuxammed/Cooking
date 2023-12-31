import React, { useState } from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { Usesignup } from '../../hooks/Usesignup';

function Signup({setUser}) {
  const [icon, seticon] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState()
  const [visible, setVisible] = useState(false)
  const { loader, error, signup } = Usesignup()
  const hundlesubmit = (e) => {
    e.preventDefault()
    signup({ name, email, password ,setUser })
  }
  const changeIcon = () => {
    seticon(!icon)
  }
  return (
    <div className='Signup'>
      <div className="container">
        <form onSubmit={hundlesubmit} action="">
          <input  autoFocus required onChange={(e) => {
            setName(e.target.value)
          }} type="text" placeholder='Create name...' />
          <input required onChange={(e) => {
            setEmail(e.target.value)
          }} type="email" placeholder='Create email...' />
          <div className="password">
            <input required onChange={(e) => {
              setPassword(e.target.value)
            }} type={visible ? "text" : "password"} placeholder='Create password...' />{icon ? <IoEyeSharp onClick={() => {
              changeIcon()
              setVisible(!visible)
            }} className='password_icon' /> : <FaEyeSlash onClick={() => {
              changeIcon()
              setVisible(!visible)
            }} className='password_icon' />}
          </div>
          {loader ? <button>Loading...</button> : <button>Sign Up</button>}
          {error && <p className='error'>{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default Signup