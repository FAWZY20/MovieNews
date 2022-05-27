import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './component/globalStyles';
import { lightTheme, darkTheme } from "./component/Themes"
import { useState} from 'react';
import { Button } from 'react-bootstrap';
import Header from './component/Header/Header';
import Acceuil from "./Pages/Acceuil/Acceuil";
import Favorie from "./Pages/Favorie/Favorie";


function App() {

  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    console.log(theme);
  }

  return (
    <div>
      <Header />
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <Router>
            <Routes>
              <Route path="/" element={<Acceuil />} />
              <Route path="/favorie" element={<Favorie />} />
            </Routes>
          </Router>
          <Button className='modeAffichage' onClick={themeToggler}>Mode Nuit</Button>
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;