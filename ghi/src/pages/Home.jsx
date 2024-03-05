import { useGetTokenQuery } from "../store/apiSlice"
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"
const Home = () => {
    const {data: account,isLoading} = useGetTokenQuery()
    const navigate = useNavigate()

    useEffect(() => {
        console.log(account)
        if (account==null) {
            console.log(account)
            navigate('/onboard')
        }
    }, [account, navigate])

    return (<h1>
    Home</h1>)
}

export default Home
