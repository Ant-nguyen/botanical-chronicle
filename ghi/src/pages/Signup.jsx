import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateAccountMutation } from '../store/apiSlice'

const Signup = () => {
    const [createAccount, result] = useCreateAccountMutation()
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    })
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        createAccount(formData)
    }

    useEffect(() => {
        if (result.isSuccess) {
            navigate('/')
        } else if (result.isError) {
            console.log('Error:', result)
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

                    {result.isError && (
                        <div className="alert alert-danger" role="alert">
                            {result.error.data.detail}
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

                        <button className="btn btn-primary">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
