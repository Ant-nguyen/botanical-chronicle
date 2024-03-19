import ModalWarning from '../components/ModalWarning'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
    useUpdatePlantLogMutation,
    useDeletePlantLogMutation,
    useGetPlantLogDetailQuery,
} from '../store/apiSlice'

const UpdatePlantLog = () => {
    const { plant_log_id } = useParams()
    const navigate = useNavigate()
    const { data: plantLog, isLoading } =
        useGetPlantLogDetailQuery(plant_log_id)

    const [plantLogForm, setPlantLogForm] = useState({
        date: '',
        watering: '',
        weather: '',
        condition: '',
    })
    const [updatePlantLog, result] = useUpdatePlantLogMutation()
    const [mutationIds, setMutationIds] = useState({})

    useEffect(() => {
        if (plantLog) {
            setMutationIds({
                plant_id: plantLog.plant_id,
                plant_log_id: plant_log_id,
            })
            setPlantLogForm({
                date: plantLog.date,
                watering: plantLog.watering,
                weather: plantLog.weather,
                condition: plantLog.condition,
            })
        }
    }, [plantLog])

    const handleFormChange = (event) => {
        const key = event.target.name
        const value = event.target.value
        setPlantLogForm({ ...plantLogForm, [key]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {
            form: plantLogForm,
            plant_id: plantLog.plant_id,
            plant_log_id: plantLog.id,
        }
        updatePlantLog(data)
    }
    const handleDelete = (event) => {
        event.preventDefault()
    }

    useEffect(() => {
        if (result.isSuccess) {
            navigate(`/plant-logs/${plant_log_id}`)
        }
    })

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="my-5 container">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Edit Plant Log</h1>
                    <ModalWarning
                        mutationParams={mutationIds}
                        mutation={useDeletePlantLogMutation}
                        navloc={`/plants/${mutationIds.plant_id}`}
                    />
                    <form id="date">
                        <div className="form-floating mb-3">
                            <input
                                value={plantLogForm.date}
                                onChange={handleFormChange}
                                placeholder="Date"
                                required
                                type="datetime-local"
                                id="date"
                                className="form-control"
                                name="date"
                            />
                            <label htmlFor="date">Date</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                value={plantLogForm.watering}
                                onChange={handleFormChange}
                                placeholder="Watering"
                                type="text"
                                id="watering"
                                className="form-control"
                                name="watering"
                            />
                            <label htmlFor="watering">Watering</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                value={plantLogForm.weather}
                                onChange={handleFormChange}
                                placeholder="Weather"
                                type="text"
                                id="weather"
                                className="form-control"
                                name="weather"
                            />
                            <label htmlFor="weather">Weather</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                value={plantLogForm.condition}
                                onChange={handleFormChange}
                                id="condition"
                                placeholder="Plant Condition"
                                type="text"
                                className="form-control"
                                name="condition"
                            />
                            <label htmlFor="detail">Plant Condition</label>
                        </div>
                        <div className="row">
                            <button
                                onClick={handleSubmit}
                                className="btn btn-success col-md-3"
                            >
                                Edit
                            </button>
                            <button
                                onClick={handleDelete}
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                                className="btn btn-danger col-md-3 ms-auto"
                            >
                                Delete Log
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdatePlantLog
