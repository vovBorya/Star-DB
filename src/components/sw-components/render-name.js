import React from "react";

const renderPersonName = ({name, gender}) => <span>{name}, gender: {gender}</span>
const renderPlanetName = ({name, population}) => <span>{name}, population: {population}</span>
const renderStarshipName = ({name, model}) => <span>{name}, model: {model}</span>

export {
  renderPersonName,
  renderPlanetName,
  renderStarshipName
}