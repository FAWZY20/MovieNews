import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './component/globalStyles';
import { lightTheme, darkTheme } from "./component/Themes"
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Header from './component/Header/Header';
import Acceuil from "./Pages/Acceuil/Acceuil";
import Favorie from "./Pages/Favorie/Favorie";
import Tcinema from "./component/Tcinema/Tcinema";
import axios from "axios";

function App() {

  const API_URL = "https://api.themoviedb.org/3"
  const [movies, setMovies] = useState([])

  const fetchMovies = async () => {
    const { data } = await axios.get(`${API_URL}/discover/movie?api_key=aeefec76517898daa807391b7d5a2389`)

    setMovies(data.results)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  const renderMovies = () => (
    <div className='container-fluid tendance-movie' >
      <div className='container' >
        <div className='row'>
          <div className='list-movie'>
            <h2>TENDANCE DE LA SEMAINE DANS LA CATEGORIE FILM</h2>
            {
              movies.map((movie) => (
                <Tcinema
                  key={movie.id}
                  movie={movie}
                />
              ))
            }
          </div >
          <a href=''>Tout les films en tendance cette semaine</a>
        </div >
      </div >
    </div >
  )

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    console.log(theme);
  }


  return (
    <div>
      <Header />
      {renderMovies()}
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