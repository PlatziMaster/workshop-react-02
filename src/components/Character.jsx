import React from 'react';

const Character = ({ characters }) => {
  return (
    <>
      {characters.map(character => (
        <div className="App-content" key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </>
  );
};

export default Character;
