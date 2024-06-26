import { NavLink } from 'react-router-dom'
import defaultImg from '../public/DefaultPlant.webp'
const PlantCard = (plant) => {
    return (
        <div className="col" key={plant.plant.id}>
            <NavLink
                className="link-underline link-underline-opacity-0"
                to={`/plants/${plant.plant.id}`}
            >
                <div className="card ">
                    <img
                        src={plant.plant.picture_url}
                        className="card-img-top img-fluid"
                        style={{
                            width: '100%',
                            aspectRatio: 1 / 1,
                        }}
                        onError={(event) => {
                            event.target.src = `${defaultImg}`
                            event.onerror = null
                        }}
                        alt="Picture of a plant"
                    />

                    <div className="card-body">
                        <h4 className="card-title">{plant.plant.name}</h4>
                        <h5 className="card-subtitle mb-2 text-body-secondary fst-italic">
                            {plant.plant.species}
                        </h5>
                        <p className="card-text">
                            {plant.plant.detail.length > 150
                                ? `${plant.plant.detail.slice(0, 150)} ...`
                                : plant.plant.detail}
                        </p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default PlantCard
