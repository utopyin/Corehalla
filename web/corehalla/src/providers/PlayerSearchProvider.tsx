import { useState, createContext, FC } from 'react';
import { useRouter } from 'next/router';
import { useDebounce } from '../hooks/useDebounce';

import { RankedRegion } from 'corehalla.js';

interface Props {
    children: React.ReactNode;
}

interface IPlayerSearchContext {
    playerSearch: string;
    setPlayerSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const PlayerSearchContext = createContext<IPlayerSearchContext>({
    playerSearch: '',
    setPlayerSearch: null,
});

export const PlayerSearchProvider: FC<Props> = ({ children }: Props) => {
    const router = useRouter();

    const { bracket = '1v1', region = 'all', page = '1' } = router.query as {
        bracket: string;
        region: RankedRegion;
        page: string;
    };

    const [playerSearch, setPlayerSearch] = useState('');

    useDebounce(
        (debouncedSearch) => {
            router.push(`/rankings/${bracket || '1v1'}/${region || 'all'}/${page || '1'}?p=${debouncedSearch}`);
        },
        1000,
        playerSearch,
    );

    return (
        <PlayerSearchContext.Provider value={{ playerSearch, setPlayerSearch }}>
            {children}
        </PlayerSearchContext.Provider>
    );
};
