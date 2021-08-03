import { Route, Switch } from 'react-router-dom';
import CharacterView from './views/CharactersView';
import EpisodesView from './views/EpisodesView';
import LocationView from './views/LocationView';
import AppBar from './components/AppBar';

function App() {
  return (
    <>
      <AppBar />
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
    </>
  );
}

export default App;
