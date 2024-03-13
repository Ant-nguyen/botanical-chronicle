import { useNavigate, NavLink, useParams } from "react-router-dom"
import { useGetPlantLogListQuery } from "../store/apiSlice"

const PlantLogList = (plant) => {
    const {plant_id} = useParams()
    const {data: plantLogList, isLoading} = useGetPlantLogListQuery(plant_id)


    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <table className="table table-success table-striped">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Button Column</th>
                </tr>
            </thead>
            <tbody>
                {plantLogList.plant_logs.map((plant_log) => (
                    <tr key={plant_log.id}>
                        <td>{plant_log.date}</td>
                        <td>
                            <button>{plant_log.id}</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default PlantLogList
