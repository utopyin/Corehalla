import React, { useContext, FC } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Page } from './components/Page';

import { IndexPage } from './pages/IndexPage';
import { RankingsPage } from './pages/RankingsPage';
import { PlayerStatsPage } from './pages/stats/PlayerPage';
import { ClanStatsPage } from './pages/stats/ClanPage';
import { FavoritesPage } from './pages/FavoritesPage';

import { AnimatePresence } from 'framer-motion';

import { ThemeContext, themeModes, ThemeMode } from './providers/ThemeProvider';

const AppWrapper = styled.div`
    min-height: 100vh;
    background-color: var(--bg);
`;

export const App: FC = () => {
    const location = useLocation();

    const { themeMode } = useContext<{ themeMode: ThemeMode }>(ThemeContext); // TODO: issue with inferring type of context

    return (
        <AppWrapper id="App" style={themeModes[themeMode]}>
            <AnimatePresence exitBeforeEnter initial>
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact>
                        <Page>
                            <IndexPage />
                        </Page>
                    </Route>
                    <Route path="/rankings/:bracket?/:region?/:page?">
                        <RankingsPage />
                    </Route>
                    <Route path="/stats/player/:id" exact>
                        <PlayerStatsPage />
                    </Route>
                    <Route path="/stats/clan/:id" exact>
                        <ClanStatsPage />
                    </Route>
                    <Route path="/favorites" exact>
                        <FavoritesPage />
                    </Route>
                </Switch>
            </AnimatePresence>
        </AppWrapper>
    );
};
