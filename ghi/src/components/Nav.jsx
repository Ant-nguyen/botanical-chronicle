import { NavLink, useNavigate } from 'react-router-dom'
import { useLogoutAccountMutation } from '../store/apiSlice'
import { useEffect } from 'react'
import { useGetTokenQuery } from '../store/apiSlice'

const Nav = () => {
    const navigate = useNavigate()
    const [logoutAccount, result] = useLogoutAccountMutation()
    const { data: account } = useGetTokenQuery()

    const logoutClick = async (event) => {
        event.preventDefault()
        logoutAccount()
    }

    useEffect(() => {
        if (result.isSuccess) {
            navigate('/')
        } else if (result.isError) {
            console.error('Error:', result.error)
        }
    }, [result])

    return (
        <nav
            className="navbar navbar-expand-lg "
            style={{ backgroundColor: '#F2F2F2' }}
        >
            <div className="container-fluid">
                <NavLink
                    className="navbar-brand"
                    to={account ? '/' : '/onboard'}
                >
                    <img
                        src="https://i.imgur.com/1phSFnw.png"
                        alt="logo"
                        width="55"
                        height="55"
                    ></img>
                    Botanical Chronicle
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="d-flex align-items-center nav-item">
                            {account && (
                                <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    onClick={logoutClick}
                                >
                                    Log Out
                                </button>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
