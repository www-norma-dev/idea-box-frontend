import './App.css'
import Routes from './Routes/index'
import React ,{useState} from 'react';
import darkMode from './theme/darkMode';
import lighmode from './theme/lighmode';
import yellowMode from './theme/yellowMode';
import ThemeContext from './theme/ThemeContext'
import { ThemeProvider } from '@material-ui/core';



function App() {
	const [themeUsed , setThemeUsed] = useState("light");  
	const contextValue = {
	  themeUsed: themeUsed,
	  updateTheme: setThemeUsed
	};
  return (

    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={darkMode}>
     	 <Routes />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
