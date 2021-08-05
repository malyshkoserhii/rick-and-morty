import { Route, Switch } from 'react-router-dom';
import { useState, useEffect, createContext, Suspense } from 'react';
import CharacterView from './views/CharactersView';
import EpisodesView from './views/EpisodesView';
import LocationView from './views/LocationView';
import WatchListView from './views/WatchListView';
import AppBar from './components/AppBar';
import Spinner from './components/Spinner';

export const WatchListContext = createContext();

export default function App() {
  const [watchList, setWatchList] = useState(() => {
    const storedEpisodes = window.localStorage.getItem('episodes');
    return JSON.parse(storedEpisodes) ?? [];
  });

  const watchListConrextValues = {
    watchList,
    setWatchList,
  };

  useEffect(() => {
    window.localStorage.setItem('episodes', JSON.stringify(watchList));
  }, [watchList]);

  return (
    <>
      <WatchListContext.Provider value={watchListConrextValues}>
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
