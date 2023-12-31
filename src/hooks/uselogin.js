import { useState } from "react"
import { projectAuth } from "../firebase/confij"

export const uselogin = () => {
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(null)
    const login = async (email, password, setUser) => {
        console.log(email, password);
        const req = await projectAuth.signInWithEmailAndPassword(email, password)
        setUser(req.user);
    }

    return { loader, error, login }
}