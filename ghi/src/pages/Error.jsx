import { useRouteError, NavLink } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <div>
                <NavLink to={`/`}>
                    <button className="btn btn-primary">Navigate to Home</button>
                </NavLink>
            </div>
            <img src="https://i.imgur.com/Lfz8nnU.png"></img>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default Error
