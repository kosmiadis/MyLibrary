import { createContext, useState } from "react";

export const ThemeCTX = createContext({
    themeMode: '',
    toggleTheme: () => {},
});

export default function ThemeProvider ({children}) {

    const [themeMode, setThemeMode] = useState('light');

    function toggleTheme () {
        setThemeMode(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

    const values = {
        themeMode,
        toggleTheme,    
    }

    return <ThemeCTX.Provider value={values}>
        { children }
    </ThemeCTX.Provider>
}