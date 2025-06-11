import { create } from 'zustand'
import { persist } from "zustand/middleware";

export type historyProps = {
    queryUser: string,
    queryIA: string
}

type SQLMindStore = {
    query: string,
    historyQuerys: Array<historyProps>,
    setQuery: (query: string) => void
    setHistoryQuerys: (querys: historyProps[]) => void;
}

export const useSQLMindStore = create<SQLMindStore>()(
    persist(
        (set) => ({
            query: "",
            historyQuerys: [],
            setQuery: (queryP) => set(() => ({ query: queryP })),
            setHistoryQuerys: (querys: historyProps[]) => set(() => ({ historyQuerys: querys }))
        }),
        {
            name: 'query-sql-store',
        }
    )
);