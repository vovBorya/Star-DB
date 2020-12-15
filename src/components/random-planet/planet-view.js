import React from "react";

const PlanetView = ({planet}) => {

  const {
    id,
    planetName,
    population,
    rotationPeriod,
    diameter
  } = planet;

  return (
    <>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt={`Planet image`}
      />
      <div>
        <h4>{planetName}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span> {diameter} </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PlanetView;