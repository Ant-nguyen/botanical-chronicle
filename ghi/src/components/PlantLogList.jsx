import { NavLink, useParams } from 'react-router-dom'
import { useGetPlantLogListQuery } from '../store/apiSlice'

const PlantLogList = (plant) => {
    const { plant_id } = useParams()
    const { data: plantLogList, isLoading } = useGetPlantLogListQuery(plant_id)

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h5>Plant Logs</h5>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {plantLogList.plant_logs.map((plant_log) => (
                        <tr key={plant_log.id}>
                            <td>
                                {new Date(plant_log.date).toLocaleString(
                                    'en-US',
                                    {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                        hour: 'numeric',
                                        minute: 'numeric',
                                    }
                                )}
                            </td>
                            <td>
                                <NavLink to={`/plant-logs/${plant_log.id}`}>
                                    <button className="btn btn-dark">
                                        Details
                                    </button>
                                </NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default PlantLogList
