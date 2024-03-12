import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ModalWarning from '../components/ModalWarning'
import {
    useGetPlantQuery,
    useUpdatePlantMutation,
    useDeletePlantMutation,
} from '../store/apiSlice'

const UpdatePlant = () => {
    const { plant_id } = useParams()
    const { data: plant, isLoading: isPlantLoading } =
        useGetPlantQuery(plant_id)
    const [updatePlant, result] = useUpdatePlantMutation()
    const [deletePlant, deleteResult] = useDeletePlantMutation()
    const navigate = useNavigate()
    const [plantForm, setPlantForm] = useState({
        name: '',
        species: '',
        picture_url: '',
        detail: '',
    })

    useEffect(() => {
        if (plant) {
            setPlantForm({
                name: plant.name,
                species: plant.species,
                picture_url: plant.picture_url,
                detail: plant.detail,
            })
        }
    }, [plant])

    const handleFormChange = (event) => {
        const key = event.target.name
        const value = event.target.value
        setPlantForm({
            ...plantForm,
            [key]: value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = { form: plantForm, plant_id: plant_id }
        updatePlant(data)
    }

    useEffect(() => {
        if (result.isSuccess) {
            navigate(`/plants/${plant_id}`)
        } else if (result.isError) {
            setErrorMessage(result.error.data.detail)
            console.error('Error:', result.error)
        }
    }, [result])

    const handleDelete = async (event) => {
        event.preventDefault()
        // deletePlant(plant_id)
    }

    useEffect(() => {
        if (deleteResult.isSuccess) {
            navigate('/')
        } else if (deleteResult.isError) {
            setErrorMessage(deleteResult.error.data.detail)
            console.error('Error:', deleteResult.error)
        }
    }, [deleteResult])

    if (isPlantLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <div className="my-5 container">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Edit Your Plant</h1>

                        <ModalWarning />

                        <form id="plant-form">
                            <div className="form-floating mb-3">
                                <input
                                    value={plantForm.name}
                                    onChange={handleFormChange}
                                    placeholder="Plant Name"
                                    required
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    name="name"
                                />
                                <label htmlFor="name">Plant Name</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    value={plantForm.species}
                                    onChange={handleFormChange}
                                    placeholder="Species"
                                    type="text"
                                    id="species"
                                    className="form-control"
                                    name="species"
                                />
                                <label htmlFor="species">Species</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    value={plantForm.picture_url}
                                    onChange={handleFormChange}
                                    placeholder="Picture URL"
                                    type="text"
                                    id="picture_url"
                                    className="form-control"
                                    name="picture_url"
                                />
                                <label htmlFor="picture_url">Picture</label>
                            </div>

                            <div className="form mb-3">
                                <label htmlFor="detail">Description</label>
                                <textarea
                                    value={plantForm.detail}
                                    onChange={handleFormChange}
                                    rows="4"
                                    id="detail"
                                    className="form-control"
                                    name="detail"
                                ></textarea>
                            </div>
                            <div className="container text-center">
                                <div className="row">
                                    <button
                                        onClick={handleSubmit}
                                        className="btn btn-primary col-md-3"
                                    >
                                        Edit Plant
                                    </button>
                                    <button
                                        onClick={handleDelete}
                                        data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop"
                                        className="btn btn-danger col-md-3 ms-auto"
                                    >
                                        Delete Plant
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UpdatePlant
