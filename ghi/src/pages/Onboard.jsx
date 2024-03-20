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
        <div
            className="position-relative"
            style={{
                backgroundSize: 'cover',
                backgroundImage: "url('https://i.imgur.com/JmTCvtI.jpeg')",
                width: '100vw',
                height: '100vh',
                paddingRight: '25px',
            }}
        >
            <div className="position-absolute top-50 start-50 translate-middle">
                <div
                    className="rounded"
                    style={{
                        backgroundColor: 'black',
                        background: 'rgba(51, 79, 60, 0.7)',
                        boxShadow:
                            'inset 0 0 20px rgba(0, 0, 0, 0.4), inset 0 0 40px rgba(255, 255, 255, 0.1)',
                    }}
                >
                    <div className="d-flex justify-content-center p-4">
                        <h5
                            className="display-1 "
                            style={{
                                fontFamily: "'Abril Fatface', serif",
                                fontWeight: '400',
                                fontStyle: 'normal',
                                color: '#F7F7F2',
                            }}
                        >
                            Plant memories
                        </h5>
                    </div>
                    <div className="d-flex justify-content-center">
                        <h6
                            className="display-2 text-white"
                            style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontWeight: '600',
                                fontStyle: 'italic',
                            }}
                        >
                            one entry at a time
                        </h6>
                    </div>
                </div>
                <br></br>
                <div
                    className="d-flex justify-content-center"
                    style={{ gap: '5px' }}
                >
                    <button onClick={signupClick} className="btn btn-light">
                        Signup
                    </button>
                    <button onClick={loginClick} className="btn btn-success">
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Onboard
