import { createContext, useState, useContext } from 'react';



export const OpenModalContext = createContext();

export function OpenModalProvider({children}){

    const [isOpen, setIsOpen] = useState(false);

    function handleOpenModal(){
        setIsOpen(!isOpen);
    }

    return (
        <OpenModalContext.Provider value={{isOpen, handleOpenModal}}>
            {children}
        </OpenModalContext.Provider>
    )
}

export function useOpenModal(){
    const context = useContext(OpenModalContext);

    return context;
}