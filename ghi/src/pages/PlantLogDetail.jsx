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
    }, [isLoading, plantListLoading, plantList, plantLog])

    if (isLoading || plantListLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="m-2">
            <NavLink to={`/plants/${plantLog.plant_id}`}>
                <button className="btn btn-success">Back</button>
            </NavLink>
            <br></br>
            <div className="container p-2 border" style={{ width: '60vw' }}>
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
                <h2
                    className="d-flex justify-content-center  fst-italic"
                    style={{ fontFamily: "'Alice', serif", fontWeight: '400' }}
                >
                    Watering: {plantLog.watering}
                </h2>
                <h3
                    className=" d-flex justify-content-center fst-italic"
                    style={{ fontFamily: "'Alice', serif", fontWeight: '400' }}
                >
                    Weather: {plantLog.weather}
                </h3>
                <div className="position-relative">
                    <h4 className="position-absolute start-0">Plant Notes:</h4>
                </div>
                <br></br>
                <br></br>
                <div className="container">
                    <p className="">{plantLog.condition}</p>
                </div>
            </div>
            <div className="container p-2 " style={{ width: '60vw' }}>
                {userPlant && (
                    <NavLink
                        className="link-underline link-underline-opacity-0 "
                        style={{ float: 'right' }}
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
