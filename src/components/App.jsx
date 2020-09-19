import React, { Suspense, lazy } from 'react';
import Loading from './Loading';

import '../styles/components/App.styl';

// Lazy Component
const CharactersList = lazy(() => import('./CharacterList'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <CharactersList />
      </Suspense>
    </div>
  );
};

export default App;
