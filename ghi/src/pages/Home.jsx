import { useGetTokenQuery } from '../store/apiSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from '../components/Nav'

const Home = () => {
    const { data: account, isLoading } = useGetTokenQuery()
    const navigate = useNavigate()

    useEffect(() => {
        if (account === null) {
            navigate('/onboard')
        }
    }, [account])

    return (
        <div>
            <Nav />
            <h1>Home</h1>
        </div>
    )
}

export default Home
