import { useParams } from "react-router-dom"
import Nav from '../components/Nav'
import { useGetPlantQuery } from "../store/apiSlice"
const PlantDetail = () =>{
    const {plant_id}= useParams()
    const { data: plant, isPlantLoading } = useGetPlantQuery(plant_id)
    console.log({plant})
    return (
        <>
            <Nav />
            <>{plant_id}</>
        </>
    )
}
export default PlantDetail
