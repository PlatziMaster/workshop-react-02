import React from 'react';
import useCharacters from '../hooks/useCharacters';

import '../styles/components/App.styl';

const CharacterList = () => {
  const characters = useCharacters(
    'https://rickandmortyapi.com/api/character/'
  );

  return (
    <div className="List">
      {characters.map(character => (
        <div className="List-content" key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
