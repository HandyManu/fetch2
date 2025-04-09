import React from 'react';
import '../App.css'; // Asegúrate de que la ruta sea correcta

const CardDragonBall = ({ character }) => {
  return (
    <div className="card">
      <img src={character.image} className="card-img-top" alt={character.name} />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">{character.description}</p>
        <p className="card-text">
          <strong>Raza:</strong> {character.race}
        </p>
        <p className="card-text">
          <strong>Género:</strong> {character.gender}
        </p>
      </div>
    </div>
  );
};

export default CardDragonBall;