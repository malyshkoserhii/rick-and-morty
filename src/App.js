import { Route, Switch } from 'react-router-dom';
import { Suspense } from 'react';
import CharacterView from './views/CharactersView';
import EpisodesView from './views/EpisodesView';
import LocationView from './views/LocationView';
import AppBar from './components/AppBar';
import Spinner from './components/Spinner';

function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/">
            <CharacterView />
          </Route>
          <Route path="/episodes">
            <EpisodesView />
          </Route>
          <Route path="/location">
            <LocationView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
