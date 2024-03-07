import { useState, useEffect } from 'react'
import { useLoginAccountMutation } from '../store/apiSlice'
import { useNavigate } from 'react-router'

const Login = () => {
    const navigate = useNavigate()
    const [loginAccount, result] = useLoginAccountMutation()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const handleSubmit = async (event) => {
        event.preventDefault()
        loginAccount(formData)
    }

    const handleFormChange = (event) => {
        const key = event.target.name
        const value = event.target.value
        setFormData({ ...formData, [key]: value })
    }

    useEffect(() => {
        if (result.isSuccess) {
            navigate('/')
        } else if (result.isError) {
            console.error('Error:', result.error)
        }
    }, [result])

    return (
        <div className="my-5 container">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Login</h1>

                    {result.isError && (
                        <div className="alert alert-danger" role="alert">
                            {result.error.data.detail}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} id="login-form">
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
                        <button className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
