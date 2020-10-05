import { useEffect, useState } from 'react';

export const useHashTabs = <T extends string>(tabs: T[], defaultTab: T): [T] => {
    let hash: string = null;
    const tabName = hash ? (hash.substring(1) as T) : defaultTab;
    const [activeTab, setActiveTab] = useState<T>(tabs.includes(tabName) ? tabName : defaultTab);

    useEffect(() => {
        hash = location.hash;
    }, []);

    useEffect(() => {
        const tabName = hash ? (hash.substring(1) as T) : defaultTab;
        const currentTab: T = tabs.includes(tabName) ? tabName : defaultTab;
        setActiveTab(currentTab);
    }, [hash]);

    return [activeTab];
};
