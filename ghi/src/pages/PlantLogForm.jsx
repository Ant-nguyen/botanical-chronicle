import { useNavigate, useParams } from 'react-router-dom'
import { useCreatePlantLogMutation } from '../store/apiSlice'
import { useState, useEffect } from 'react'

const PlantLogForm = () => {
    const { plant_id } = useParams()
    const [createPlantLog, result] = useCreatePlantLogMutation()
    const navigate = useNavigate()
    const [plantLogForm, setPlantLogForm] = useState({
        date: '',
        watering: '',
        weather: '',
        condition: '',
    })
    const handleFormChange = (event) => {
        const key = event.target.name
        const value = event.target.value
        setPlantLogForm({ ...plantLogForm, [key]: value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = { form: plantLogForm, plant_id: plant_id }
        createPlantLog(data)
    }
    useEffect(() => {
        if (result.isSuccess) {
            navigate(`/plants/${plant_id}`)
        }
    }, [result])

    return (
        <div className="my-5 container">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a New Plant Log</h1>

                    <form onSubmit={handleSubmit} id="date">
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

                        <div className="form mb-3">
                            <label htmlFor="condition">Plant note</label>
                            <textarea
                                value={plantLogForm.condition}
                                onChange={handleFormChange}
                                rows="4"
                                id="condition"
                                className="form-control"
                                name="condition"
                            ></textarea>
                        </div>

                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PlantLogForm
