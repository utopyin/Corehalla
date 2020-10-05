import React, { useContext, CSSProperties, FC } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import { AppProps } from 'next/app';

import { ThemeContext, ThemeProvider } from './providers/ThemeProvider';
import { PlayerSearchProvider } from './providers/PlayerSearchProvider';
import { FavoritesProvider } from './providers/FavoritesProvider';

const GlobalStyle = createGlobalStyle<{ theme: string }>`
  body {
    ${({ theme }) => theme}
  }
`;

const Wrapper = styled.div`
    height: 100%;
    min-height: 100%;
    margin-left: 4rem;
`;

const AppWrapper: FC<AppProps> = ({ Component, pageProps, router }: AppProps) => {
    const { getThemeStr } = useContext(ThemeContext);

    console.log('yo');

    return (
        <ThemeProvider>
            <FavoritesProvider>
                <PlayerSearchProvider>
                    <GlobalStyle theme={getThemeStr()} />
                    <Wrapper id="App">
                        <motion.div key={router.route} animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
                            <Component {...pageProps} />
                        </motion.div>
                    </Wrapper>
                </PlayerSearchProvider>
            </FavoritesProvider>
        </ThemeProvider>
    );
};

export default AppWrapper;
