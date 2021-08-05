import { Route, Switch } from 'react-router-dom';
import { useState, createContext, Suspense } from 'react';
import CharacterView from './views/CharactersView';
import EpisodesView from './views/EpisodesView';
import LocationView from './views/LocationView';
import WatchListView from './views/WatchListView';
import AppBar from './components/AppBar';
import Spinner from './components/Spinner';

export const WatchListContext = createContext();

export default function App() {
  const [watchList, setWatchList] = useState(['hello world!']);
  console.log('🚀 ~ file: App.js ~ line 14 ~ App ~ watchList', watchList);

  const onUpdateWatchList = () => {
    setWatchList(watchList);
  };

  return (
    <>
      <WatchListContext.Provider value={watchList}>
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
            <Route path="/watch">
              <WatchListView />
            </Route>
          </Switch>
        </Suspense>
      </WatchListContext.Provider>
    </>
  );
}
