import { Route, Switch } from 'react-router-dom';
import { useState, useEffect, createContext, Suspense, lazy } from 'react';
import AppBar from './components/AppBar';
import Spinner from './components/Spinner';
import ROUTE from './helpers/routes';

export const WatchListContext = createContext();

const CharactersView = lazy(() =>
  import('./views/CharactersView' /* webpackChunkName: "character-view" */),
);
const EpisodesView = lazy(() =>
  import('./views/EpisodesView' /* webpackChunkName: "episodes-page-view" */),
);
const LocationView = lazy(() =>
  import('./views/LocationView' /* webpackChunkName: "location-page-view" */),
);
const WatchListView = lazy(() =>
  import('./views/WatchListView' /* webpackChunkName: "watchlist-page-view" */),
);

export default function App() {
  const [watchList, setWatchList] = useState(() => {
    const storedEpisodes = window.localStorage.getItem('episodes');
    return JSON.parse(storedEpisodes) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('episodes', JSON.stringify(watchList));
  }, [watchList]);

  const watchListContextValues = {
    watchList,
    setWatchList,
  };

  return (
    <>
      <WatchListContext.Provider value={watchListContextValues}>
        <AppBar />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path={ROUTE.CHARACTERS}>
              <CharactersView />
            </Route>
            <Route path={ROUTE.EPISODES}>
              <EpisodesView />
            </Route>
            <Route path={ROUTE.LOCATION}>
              <LocationView />
            </Route>
            <Route path={ROUTE.WATCH_LIST}>
              <WatchListView />
            </Route>
          </Switch>
        </Suspense>
      </WatchListContext.Provider>
    </>
  );
}
