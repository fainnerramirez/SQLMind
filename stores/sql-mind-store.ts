import type { User } from 'firebase/auth';
import { create } from 'zustand'
import { persist } from "zustand/middleware";

export type historyProps = {
    queryUser: string,
    queryIA: string
}

type SQLMindStore = {
    user: User | null,
    query: string,
    historyQuerys: historyProps[],
    setQuery: (query: string) => void
    setHistoryQuerys: (querys: historyProps[]) => void;
    setUser: (user: User | null) => void;
}

export const useSQLMindStore = create<SQLMindStore>()(
    persist(
        (set) => ({
            user: null,
            query: "",
            historyQuerys: [],
            setQuery: (queryP) => set(() => ({ query: queryP })),
            setHistoryQuerys: (querys: historyProps[]) => set(() => ({ historyQuerys: querys })),
            setUser: (userP: User | null) => set(() => ({ user: userP }))
        }),
        {
            name: 'query-sql-store',
        }
    )
);