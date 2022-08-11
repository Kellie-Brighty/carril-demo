import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [theme, setTheme] = useState()

    return (
      <GlobalContext.Provider value={{theme}}>
        {children}
      </GlobalContext.Provider>
    );
}