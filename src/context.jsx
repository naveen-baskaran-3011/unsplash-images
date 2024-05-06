import React, { createContext, useCallback, useContext, useState } from 'react'

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleDarkTheme = useCallback(() => {
    setIsDarkTheme(prevValue => !prevValue);
    const bodyTag = document.querySelector('body');
    bodyTag.classList.toggle('dark-theme');
  });

  const [searchTerm, setSearchTerm] = useState('cat');
  const changeSearchTerm = useCallback((term) => setSearchTerm(term));

  return (
    <AppContext.Provider value={{
      isDarkTheme,
      toggleDarkTheme,
      searchTerm,
      changeSearchTerm
      }}>
        {children}
    </AppContext.Provider>
  )
};

export const useGlobalContext = () => useContext(AppContext);
