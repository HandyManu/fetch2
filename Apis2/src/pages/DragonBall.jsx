import React, { useState, useEffect } from 'react';
import CardDragonBall from '../components/CardDragonBall';

const DragonBall = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCharacters = async () => {
    try {
      const response = await fetch('https://dragonball-api.com/api/characters');
      const data = await response.json();
      setCharacters(data.items || data); // Ajustar según estructura de la API
    } catch (error) {
      console.error('Error al cargar personajes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Personajes</h1>
      {loading ? (
        <p className="text-center">Cargando personajes...</p>
      ) : (
        <div className="row">
          {characters.map((character) => (
            <div className="col-md-4" key={character.id}>
              <CardDragonBall character={character} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DragonBall;
