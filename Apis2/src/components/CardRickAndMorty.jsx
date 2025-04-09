import React from 'react';

const CardRickAndMorty = ({ character }) => {
  return (
    <div className="card">
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
      />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">Estado: {character.status}</p>
        <p className="card-text">Especie: {character.species}</p>
        <p className="card-text">Género: {character.gender}</p>
      </div>
    </div>
  );
};

export default CardRickAndMorty;
