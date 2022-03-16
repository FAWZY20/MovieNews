import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Tcinema from './component/Tcinema/Tcinema';
import Tserie from './component/Tserie/Tserie';
import Ttv from './component/Ttv/Ttv';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './component/globalStyles';
import { lightTheme, darkTheme } from "./component/Themes"
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div>
          <Header />
          <div className='container-fluid' >
            <div className='container section' >
              <Tcinema />
              <Tserie />
              <Ttv />
            </div>
          </div>
          <Button className='modeAffichage' onClick={themeToggler}>Mode d'affichage</Button>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
