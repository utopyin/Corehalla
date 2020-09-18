import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Router } from 'react-router-dom';
import { history } from './history';

import { PlayerSearchProvider } from './providers/PlayerSearchProvider';
import { ThemeProvider } from './providers/ThemeProvider';
import { FavoritesProvider } from './providers/FavoritesProvider';
import { NavigationProvider } from './providers/NavigationProvider';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Router history={history}>
        <ThemeProvider>
            <NavigationProvider>
                <FavoritesProvider>
                    <PlayerSearchProvider>
                        <App />
                    </PlayerSearchProvider>
                </FavoritesProvider>
            </NavigationProvider>
        </ThemeProvider>
    </Router>,
    rootElement,
);
