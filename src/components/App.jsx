import React, { lazy, Suspense } from 'react';
import '../styles/components/App.styl';
import useCharacters from '../hooks/useCharacters';
import Loader from './Loader';

const Characters = lazy(() => import('./Character'));

const App = () => {
  const characters = useCharacters(
    'https://rickandmortyapi.com/api/character/'
  );
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Characters characters={characters} />
      </Suspense>
    </div>
  );
};

export default App;
