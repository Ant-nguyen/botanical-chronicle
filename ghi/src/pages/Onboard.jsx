import { useNavigate } from 'react-router-dom'
import ModalLogin from '../components/ModalLogin'
import bgUrl from '../public/onboard-bg.webp'

const Onboard = () => {
    const navigate = useNavigate()

    const signupClick = () => {
        navigate('/signup')
    }

    return (
        <div
            className="position-relative"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(${bgUrl})`,
                width: '100vw',
                height: '100vh',
                paddingRight: '25px',
            }}
        >
            {' '}
            <ModalLogin />
            <div className="position-absolute top-50 start-50 translate-middle">
                <div
                    className="rounded p-4"
                    style={{
                        backgroundColor: 'black',
                        background: 'rgba(51, 79, 60, 0.7)',
                        boxShadow:
                            'inset 0 0 20px rgba(0, 0, 0, 0.4), inset 0 0 40px rgba(255, 255, 255, 0.1)',
                    }}
                >
                    <div className="d-flex justify-content-center">
                        <h1
                            className="display-1 text-center"
                            style={{
                                fontFamily: "'Abril Fatface', serif",
                                fontWeight: '400',
                                fontStyle: 'normal',
                                color: '#F7F7F2',
                            }}
                        >
                            Plant memories
                        </h1>
                    </div>
                    <div className="d-flex justify-content-center">
                        <h2
                            className="display-2 text-white text-center"
                            style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontWeight: '600',
                                fontStyle: 'italic',
                            }}
                        >
                            one entry at a time
                        </h2>
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
                    <button
                        className="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Onboard
