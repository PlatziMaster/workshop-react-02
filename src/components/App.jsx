import React, { Suspense } from 'react';
import '../styles/components/App.styl';
import useCharacters from '../hooks/useCharacters';

const App = () => {
  const characters = useCharacters(
    'https://rickandmortyapi.com/api/character/'
  );
  return (
    <div className="App">
      <Suspense fallback={<h1>Cargando...</h1>}>
        {characters.map((character) => (
          <div className="App-content" key={character.id}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        ))}
      </Suspense>
    </div>
  );
};

export default App;
