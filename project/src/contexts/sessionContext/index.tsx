import { createContext, useState } from "react";

import { ReactNode } from "react"

interface IChildrenProvider {
    children: ReactNode
}
interface test {
    user: boolean | undefined
}
export const RoutesContext = createContext<test>({} as test);
export const RoutesProvider = ({children}:IChildrenProvider) => {
    const [ user, setUser] = useState<boolean>();
    
    return (
        <RoutesContext.Provider value={{ user}}>
            {children}
        </RoutesContext.Provider>

    )
}