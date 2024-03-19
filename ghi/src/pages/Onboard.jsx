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
            className=""
            style={{
                backgroundColor: '#30694C',
                backgroundSize: 'cover',
                width: '100vw',
                height: '100vh',
                paddingRight: '20px',
            }}
        >
            <div
                className="container"
                style={{
                    backgroundColor: '#f5faf6',
                    backgroundSize: 'cover',
                    height: '100vh',
                }}
            >
                <br></br>
                <br></br>
                <div className="d-flex justify-content-center">
                    <img
                        className="img-fluid"
                        width="45%"
                        src="https://i.imgur.com/Ri3xfZG.png"
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <h5 className="display-6">Plant memories,</h5>
                </div>
                <div className="d-flex justify-content-center">
                    <h6 className="display-6 cormorant-garamond-light">
                        one entry at a time
                    </h6>
                </div>
                <br></br>

                <div
                    className="d-flex justify-content-center"
                    style={{ gap: '5px' }}
                >
                    <button onClick={signupClick} className="btn btn-success">
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
