import React, { useState, useEffect } from 'react';
import RickAndMortyCard from '../components/CardRickAndMorty';

const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  // Función para obtener los datos de la API
  const fetchCharacters = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results || []); // Utiliza la propiedad `results` de la API
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    } finally {
      setLoading(false);
    }
  };

  // Cargar los datos al iniciar la página
  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Personajes de Rick and Morty</h1>
      {loading ? (
        <p className="text-center">Cargando personajes...</p>
      ) : (
        <div className="row">
          {characters.map((character) => (
            <div className="col-md-4" key={character.id}>
              <RickAndMortyCard character={character} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RickAndMorty;
