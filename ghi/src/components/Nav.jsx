import { NavLink, useNavigate } from 'react-router-dom'
import { useLogoutAccountMutation } from '../store/apiSlice'
import { useEffect } from 'react'
import { useGetTokenQuery } from '../store/apiSlice'
import navLogo from '../public/Logo-trans.webp'

const Nav = () => {
    const navigate = useNavigate()
    const [logoutAccount, logoutResult] = useLogoutAccountMutation()
    const { data: account } = useGetTokenQuery()

    const logoutClick = async (event) => {
        event.preventDefault()
        logoutAccount()
    }

    useEffect(() => {
        if (logoutResult.isSuccess) {
            navigate('/onboard')
        } else if (logoutResult.isError) {
            console.error('Error:', logoutResult.error)
        }
    }, [logoutResult, navigate])

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
                    <img src={navLogo} alt="logo" width="55" height="55"></img>
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
                                <div>
                                    <div>Hello {account.account.username}</div>
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger"
                                        onClick={logoutClick}
                                    >
                                        Log Out
                                    </button>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
