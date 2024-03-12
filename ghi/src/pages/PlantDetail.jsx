import { useParams } from 'react-router-dom'
import { useGetPlantQuery } from '../store/apiSlice'
import { NavLink } from 'react-router-dom'

const PlantDetail = () => {
    const { plant_id } = useParams()
    const { data: plant, isLoading: isPlantLoading } =
        useGetPlantQuery(plant_id)
    if (isPlantLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <img
                        src="https://i.imgur.com/qQiNxzB.png"
                        className="card-img-fluid w-50"
                        alt="placeholder-plant-image"
                    />
                </div>
                <h1 className="d-flex justify-content-center">{plant.name}</h1>
                <h3 className="d-flex justify-content-center text-body-tertiary fst-italic">
                    {plant.species}
                </h3>
                <p className="d-flex justify-content-center">{plant.detail}</p>
                <NavLink to={`/plants/edit/${plant_id}`}>
                    <button className="btn btn-success">Edit Plant</button>
                </NavLink>
            </div>
        </>
    )
}

export default PlantDetail
