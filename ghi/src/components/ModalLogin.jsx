import { useState, useEffect } from 'react'
import { useLoginAccountMutation, useGetTokenQuery } from '../store/apiSlice'
import { useNavigate } from 'react-router'
const ModalLogin = () => {
    const navigate = useNavigate()
    const [loginAccount, result] = useLoginAccountMutation()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })
    const { data: loginToken } = useGetTokenQuery()

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
        if (loginToken) {
            navigate('/')
        }
    }, [loginToken])

    useEffect(() => {
        if (result.isError) {
            console.error('Error:', result.error)
        } else if (result.isSuccess) {
            const modalElement = document.getElementById('staticBackdrop')
            const modal = window.bootstrap.Modal.getInstance(modalElement)
            modal.hide()
        }
    }, [result])

    return (
        <>
            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="staticBackdropLabel"
                            >
                                Login
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <>
                                {result.isError && (
                                    <div
                                        className="alert alert-danger"
                                        role="alert"
                                    >
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
                                        <label htmlFor="username">
                                            Username
                                        </label>
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
                                        <label htmlFor="password">
                                            Password
                                        </label>
                                    </div>
                                    <button className="btn btn-primary">
                                        Login
                                    </button>
                                </form>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalLogin
