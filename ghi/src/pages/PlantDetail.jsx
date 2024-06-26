import { useParams } from 'react-router-dom'
import { useGetPlantQuery, useGetTokenQuery } from '../store/apiSlice'
import { NavLink } from 'react-router-dom'
import PlantLogList from '../components/PlantLogList'
import defaultImg from '../public/DefaultPlant.webp'
const PlantDetail = () => {
    const { plant_id } = useParams()
    const { data: plant, isLoading: isPlantLoading } =
        useGetPlantQuery(plant_id)
    const { data: token } = useGetTokenQuery()

    if (isPlantLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <div className="container border shadow-m p-2">
                <div className="d-flex justify-content-center">
                    <div className="d-flex justify-content-center p-2">
                        <img
                            src={plant.picture_url}
                            onError={(event) => {
                                event.target.src = defaultImg
                                event.onerror = null
                            }}
                            className="img-fluid w-25 h-auto rounded"
                            alt={`image of ${plant.name}`}
                        />
                    </div>
                </div>
                <h1 className="d-flex justify-content-center">{plant.name}</h1>
                <h3 className="d-flex justify-content-center text-body-tertiary fst-italic">
                    {plant.species}
                </h3>
                <p className="d-flex justify-content-center">{plant.detail}</p>
                {token?.account?.id === plant.account_id && (
                    <NavLink
                        className="d-flex justify-content-center link-underline link-underline-opacity-0"
                        to={`/plants/edit/${plant_id}`}
                    >
                        <button className="btn btn-success">Edit Plant</button>
                    </NavLink>
                )}
                <div className="border container rounded mt-2">
                    <PlantLogList />
                </div>

                {token?.account?.id === plant.account_id && (
                    <NavLink to={`/plants/${plant_id}/plant-logs/add`}>
                        <button className="btn btn-success">
                            Add Plant Log
                        </button>
                    </NavLink>
                )}
            </div>
        </>
    )
}

export default PlantDetail
