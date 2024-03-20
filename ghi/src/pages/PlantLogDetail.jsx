import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
    useGetPlantLogDetailQuery,
    useGetMyPlantListQuery,
} from '../store/apiSlice'

const PlantLogDetail = () => {
    const { plant_log_id } = useParams()
    const { data: plantLog, isLoading } =
        useGetPlantLogDetailQuery(plant_log_id)
    const { data: plantList, isLoading: plantListLoading } =
        useGetMyPlantListQuery()
    const [userPlant, setUserPlant] = useState(false)

    useEffect(() => {
        if (!isLoading && !plantListLoading) {
            for (let plant of plantList.plants) {
                if (plant.id === plantLog.plant_id) {
                    setUserPlant(true)
                }
            }
        }
    }, [isLoading, plantListLoading])

    if (isLoading || plantListLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="m-2">
            <NavLink to={`/plants/${plantLog.plant_id}`}>
                <button className="btn btn-outline-success">Back</button>
            </NavLink>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <img
                        src="../public/Plantlog-img.webp"
                        className="img-fluid w-25 h-auto card-img-top rounded"
                        alt="placeholder image"
                    />
                </div>
                <h1 className="d-flex justify-content-center">
                    {new Date(plantLog.date).toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                    })}
                </h1>
                <h3 className="d-flex justify-content-center text-body-tertiary fst-italic">
                    Watering: {plantLog.watering}
                </h3>
                <h3 className="d-flex justify-content-center text-body-tertiary fst-italic">
                    Weather: {plantLog.weather}
                </h3>
                <p className="d-flex justify-content-center">
                    Plant Notes: {plantLog.condition}
                </p>
                {userPlant && (
                    <NavLink
                        className="d-flex justify-content-center link-underline link-underline-opacity-0"
                        to={`/plant-logs/edit/${plant_log_id}`}
                    >
                        <button className="btn btn-success">
                            Edit Plant Log
                        </button>
                    </NavLink>
                )}
            </div>
        </div>
    )
}

export default PlantLogDetail
