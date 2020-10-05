import React, { useContext, CSSProperties, FC, PropsWithChildren } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeContext, ThemeProvider } from './providers/ThemeProvider';
import { PlayerSearchProvider } from './providers/PlayerSearchProvider';
import { FavoritesProvider } from './providers/FavoritesProvider';

const GlobalStyle = createGlobalStyle<{ theme: string }>`
    :root {
    ${({ theme }) => theme}
    }
`;

const Wrapper = styled.div`
    height: 100%;
    min-height: 100%;
    margin-left: 4rem;
`;

const AppWrapper: FC<PropsWithChildren<unknown>> = ({ children }: PropsWithChildren<unknown>) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/assets/favicon.png" />
                <link rel="apple-touch-icon" href="/assets/favicon.png" />

                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta content="#212121" name="theme-color" />
                <meta content="Corehalla - Brawlhalla Stats & Rankings" name="description" />
            </Head>
            <ThemeProvider>
                <FavoritesProvider>
                    <PlayerSearchProvider>{children}</PlayerSearchProvider>
                </FavoritesProvider>
            </ThemeProvider>
        </>
    );
};

const _App: FC<AppProps> = ({ Component, pageProps, router }: AppProps) => {
    const { getThemeStr } = useContext(ThemeContext);

    return (
        <>
            <GlobalStyle theme={getThemeStr()} />
            <AppWrapper>
                <Wrapper id="App">
                    <motion.div key={router.route} animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
                        <Component {...pageProps} />
                    </motion.div>
                </Wrapper>
            </AppWrapper>
        </>
    );
};

export default _App;
