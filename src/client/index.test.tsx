import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';

import { ThemeProvider } from './providers/ThemeProvider';
import { NavigationProvider } from './providers/NavigationProvider';
import { FavoritesProvider } from './providers/FavoritesProvider';
import { PlayerSearchProvider } from './providers/PlayerSearchProvider';

import { App } from './App';

const app = () => (
    <ThemeProvider>
        <NavigationProvider>
            <FavoritesProvider>
                <PlayerSearchProvider>
                    <App />
                </PlayerSearchProvider>
            </FavoritesProvider>
        </NavigationProvider>
    </ThemeProvider>
);

describe('App Renders', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router>{app()}</Router>, div);
    });
});
