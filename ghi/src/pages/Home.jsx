import { useGetTokenQuery, useGetMyPlantListQuery } from '../store/apiSlice'
import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import PlantCard from '../components/PlantCard'
import addPlantImg from '../public/AddPlant.webp'
const Home = () => {
    const { data: account } = useGetTokenQuery()
    const navigate = useNavigate()

    useEffect(() => {
        if (account === null || account === undefined) {
            navigate('/onboard')
        }
    }, [account, navigate])

    const { data: plantList, isLoading: isPlantLoading } =
        useGetMyPlantListQuery()

    if (isPlantLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1 className="d-flex justify-content-center">My Garden</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <NavLink
                            className="link-underline link-underline-opacity-0"
                            to="/plants/add"
                        >
                            <div className="card">
                                <img
                                    src={addPlantImg}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body header-5">
                                    <p className="card-title text-center h5">
                                        Add New Plant
                                    </p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    {plantList &&
                        plantList.plants
                            .toReversed()
                            .map((plant) => (
                                <PlantCard key={plant.id} plant={plant} />
                            ))}
                </div>
            </div>
        </div>
    )
}

export default Home
