import { createContext } from "react";

export const FiltersContext = createContext();

export function FiltersProvider({children}) {
    return (
        <FiltersContext.Provider value={{
            categoty: 'all',
            minPrice: 0
        }}>
            {children}
        </FiltersContext.Provider>
    )
}