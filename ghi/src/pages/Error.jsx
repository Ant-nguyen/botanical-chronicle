import { useRouteError, NavLink } from 'react-router-dom'
import errorImage from '../public/ErrorImage.webp'
const Error = () => {
    const error = useRouteError()

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <div>
                <NavLink to={`/`}>
                    <button className="btn btn-primary">
                        Navigate to Home
                    </button>
                </NavLink>
            </div>
            <p>
                Page Error:
                <i>{error.statusText || error.message}</i>
            </p>
            <div className="container">
                <img style={{height:"100vh"}}src={errorImage}></img>
            </div>
        </div>
    )
}

export default Error
