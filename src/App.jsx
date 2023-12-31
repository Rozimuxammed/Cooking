import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/Navbar'
import Login from './assets/pages/Login'
import Signup from './assets/pages/Signup'
import Home from './assets/pages/Home'
import { useEffect, useState } from 'react'
import { projectAuth } from './firebase/confij'

function App() {
  const [mode, setMode] = useState(false)
  const [user, setUser] = useState(null)
  const [refresh, setRefresh] = useState(false)
  useEffect(() => {
    const auth = projectAuth.onAuthStateChanged((person) => {
      setUser(person)
      setRefresh(true)
    })
  })

  return (
    <div className={mode ? "app light" : "app"}>
      <BrowserRouter>
        <Navbar
          setUser={setUser}
          user={user}
          mode={mode}
          setMode={setMode} />
        {refresh &&
          <Routes>
            {!user && <Route path='/' element={<Navigate to={"/signup"} />} />}
            {user && <Route path='/' element={<Home />} />}
            {user && <Route path='/login' element={<Navigate to={"/"} />} />}
            {!user && <Route path='/login' element={<Login setUser={setUser} />} />}
            {user && <Route path='/signup' element={<Navigate to={"/"} />} />}
            {!user && <Route path='/signup' element={<Signup setUser={setUser} />} />}
          </Routes>
        }
      </BrowserRouter>
    </div>
  )
}

export default App
