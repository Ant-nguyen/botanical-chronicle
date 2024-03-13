import { NavLink, useParams } from "react-router-dom"
import { useGetPlantLogDetailQuery } from "../store/apiSlice"


const PlantLogDetail = () => {
    const { plant_log_id } = useParams()
    const { data: plantLog, isLoading } = useGetPlantLogDetailQuery(plant_log_id)

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <img
                    src="https://i.imgur.com/qQiNxzB.png"
                    className="card-img-fluid w-50"
                    alt="placeholder-plant-image"
                />
            </div>
            <NavLink to={`/plant-logs/edit/${plant_log_id}`}>
                <button className="btn btn-success">Edit Plant Log</button>
            </NavLink>
            <h1 className="d-flex justify-content-center">
                {new Date(plantLog.date).toLocaleString()}
            </h1>
            <h3 className="d-flex justify-content-center text-body-tertiary fst-italic">
                {plantLog.watering}
            </h3>
            <h3 className="d-flex justify-content-center text-body-tertiary fst-italic">
                {plantLog.weather}
            </h3>
            <p className="d-flex justify-content-center">
                {plantLog.condition}
            </p>
        </div>
    )

}

export default PlantLogDetail
