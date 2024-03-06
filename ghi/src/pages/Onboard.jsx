import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Onboard = () => {
    const navigate = useNavigate()
    const loginClick = (event) => {
        navigate('/login')
    }

    const signupClick = (event) => {
        navigate('/signup')
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <img src="https://i.imgur.com/TheK8jr.png" />
            </div>
            <div className="d-flex justify-content-center">
                <button onClick={signupClick} className="btn btn-primary">
                    Signup
                </button>
                <button onClick={loginClick} className="btn btn-primary">
                    Login
                </button>
            </div>
        </div>
    )
}

export default Onboard
