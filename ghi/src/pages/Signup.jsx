import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    useCreateAccountMutation,
    useLoginAccountMutation,
    useGetTokenQuery,
} from '../store/apiSlice'

const Signup = () => {
    const [loginAccount,] = useLoginAccountMutation()
    const [createAccount, result] = useCreateAccountMutation()
    const [errorMessage, setErrorMessage] = useState('')
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    })
    const [clickable,setClickable] = useState(true)
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const navigate = useNavigate()
    const { data: loginToken } = useGetTokenQuery()

    const handleSubmit = async (event) => {
        event.preventDefault()
        setErrorMessage('')
        if (passwordConfirmation !== formData.password) {
            setErrorMessage('Passwords do not match')
        } else {
            setClickable(false)
            createAccount(formData)
            if (result.isSuccess) {
                loginAccount({
                    username: formData.username,
                    password: formData.password,
                })
            } 
        }
    }

    useEffect(() => {
        if (loginToken) {
            navigate('/')
        }
    }, [loginToken, navigate])

    useEffect(() => {
        if (result.isError) {
            setErrorMessage(result.error.data.detail)
            setClickable(true)
        } 
    }, [result])

    const handleFormChange = (event) => {
        const key = event.target.name
        const value = event.target.value
        setFormData({ ...formData, [key]: value })
    }

    return (
        <div className="my-5 container">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Sign Up</h1>
                    {errorMessage && (
                        <div className="alert alert-danger" role="alert">
                            {errorMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} id="signup-form">
                        <div className="form-floating mb-3">
                            <input
                                value={formData.username}
                                onChange={handleFormChange}
                                placeholder="Username"
                                required
                                type="text"
                                id="username"
                                className="form-control"
                                name="username"
                            />
                            <label htmlFor="username">Username</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                value={formData.email}
                                onChange={handleFormChange}
                                placeholder="Email"
                                required
                                type="text"
                                id="email"
                                className="form-control"
                                name="email"
                            />
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                value={formData.password}
                                onChange={handleFormChange}
                                placeholder="Password"
                                required
                                type="password"
                                id="password"
                                className="form-control"
                                name="password"
                            />
                            <label htmlFor="password">Password</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                value={passwordConfirmation}
                                onChange={(e) => {
                                    setPasswordConfirmation(e.target.value)
                                }}
                                placeholder="Password Confirmation"
                                required
                                type="password"
                                id="password_confirmation"
                                className="form-control"
                                name="password_confirmation"
                            />
                            <label htmlFor="password_confirmation">
                                Password Confirmation
                            </label>
                        </div>

                        <button className="btn btn-primary" disabled={!clickable}>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
