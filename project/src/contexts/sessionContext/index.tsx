import { createContext, useState } from "react";

import { ReactNode } from "react"

export interface IChildrenProvider {
    children: ReactNode
}
interface test {
    modal: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}
export const RoutesContext = createContext<test>({} as test);
export const RoutesProvider = ({children}:IChildrenProvider) => {
    const [modal, setModal] = useState<boolean>(false);
    
    return (
        <RoutesContext.Provider value={{modal, setModal}}>
            {children}
        </RoutesContext.Provider>

    )
}