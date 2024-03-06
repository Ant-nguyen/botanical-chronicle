import { useState } from 'react'

const Login = () => {
    return (
        <div className="my-5 container">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Login</h1>
                    <form id="create-manufacturer-form">
                        <div className="form-floating mb-3">
                            <input
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
