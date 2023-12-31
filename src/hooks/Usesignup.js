import { useState } from "react"
import { projectAuth } from "../firebase/confij"

export const Usesignup = () => {
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(null)
    const signup = async ({ name, email, password, setUser }) => {
        try {
            setError(null)
            setLoader(true)
            const req = await projectAuth.createUserWithEmailAndPassword(email, password)
            await req.user.updateProfile({ displayName: name })
            setLoader(false)
            setUser(req.user)
        } catch (err) {
            setLoader(false)
            setError(err.message)
        }
    }

    return { loader, error, signup }
}