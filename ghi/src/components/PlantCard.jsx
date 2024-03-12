import { NavLink, useNavigate } from 'react-router-dom'
const PlantCard = (plant) => {
    return (
        <div className="col" key={plant.plant.id}>
            <NavLink
                className="link-underline link-underline-opacity-0"
                to={`/plants/${plant.plant.id}`}
            >
                <div className="card">
                    <img
                        src="https://i.imgur.com/qQiNxzB.png"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h4 className="card-title">{plant.plant.name}</h4>
                        <h6 className="card-subtitle mb-2 text-body-secondary">
                            {plant.plant.species}
                        </h6>
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