import { NavLink, useParams } from "react-router-dom"
import { useGetPlantLogDetailQuery } from "../store/apiSlice"


const PlantLogDetail = () => {
    const { plant_log_id } = useParams()
    const { data: plantLog, isLoading } = useGetPlantLogDetailQuery(plant_log_id)
    if (isLoading) {
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
                        src="https://i.imgur.com/VW3GrYF.png"
                        className="img-fluid w-25 h-auto card-img-top rounded"
                        alt="placeholder image"
                    />
                </div>
                <h1 className="d-flex justify-content-center">
                    {new Date(plantLog.date).toLocaleString("en-US",{
                        year: "numeric",
                        month: "short",
                        day: 'numeric',
                        hour:'numeric',
                        minute:'numeric'
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
                <NavLink
                    className="d-flex justify-content-center link-underline link-underline-opacity-0"
                    to={`/plant-logs/edit/${plant_log_id}`}
                >
                    <button className="btn btn-success">Edit Plant Log</button>
                </NavLink>
            </div>
        </div>
    )

}

export default PlantLogDetail
