// All your environment variables in vite are in this object
// When using environment variables, you should do a check to see if
// they are defined or not and throw an appropriate error message
// const API_HOST = import.meta.env.VITE_API_HOST
// let url = `${API_HOST}/api/launch-details`
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'
const App = () => {
    return (
        <div>
            <Nav />
            <Outlet />
        </div>
    )
}
export default App
