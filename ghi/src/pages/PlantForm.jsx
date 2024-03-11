import { useState,useEffect } from "react"
import Nav from "../components/Nav"
import { useNavigate } from "react-router-dom"
import { useCreatePlantMutation } from "../store/apiSlice"
const PlantForm =()=>{
    const [createPlant,result]=useCreatePlantMutation()
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const [plantForm, setPlantForm] = useState({
        name: '',
        species: '',
        picture_url: '',
        detail: '',
    })
    const handleFormChange = (event)=>{
        const key = event.target.name
        const value = event.target.value
        setPlantForm({...plantForm,[key]:value
        })
    }
    const handleSubmit = async(event) =>{
        event.preventDefault()
        setErrorMessage('')
        createPlant(plantForm)
    }
    useEffect(() => {
        if (result.isSuccess) {
            navigate("/")
        } else if (result.isError) {
            setErrorMessage(result.error.data.detail)
            console.error('Error:', result.error)
        }
    }, [result])
    return (
        <>
            <Nav />

            <div className="my-5 container">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a New Plant</h1>
                        {errorMessage && (
                            <div className="alert alert-danger" role="alert">
                                {errorMessage}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} id="plant-form">
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

                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
    }

export default PlantForm
