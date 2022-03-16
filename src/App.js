// import './App.css';
// import Header from './component/Header/Header';
// import Tcinema from './component/Tcinema/Tcinema';
// import Tserie from './component/Tserie/Tserie';
// import Ttv from './component/Ttv/Ttv';
// import { ThemeProvider } from "styled-components";
// import { GlobalStyles } from './component/globalStyles';
// import { lightTheme, darkTheme } from "./component/Themes"
// import { useState } from 'react';
// import { Button } from 'react-bootstrap';

// function App() {
//   const [theme, setTheme] = useState('light');
//   const themeToggler = () => {
//     theme === 'light' ? setTheme('dark') : setTheme('light');
//     console.log(theme);
//   }
//   return (
//     <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
//       <>
//         <GlobalStyles />
//         <div>
//           <Header />
//           <div className='container-fluid' >
//             <div className='container section' >
//               <Tcinema />
//               <Tserie />
//               <Ttv />
//             </div>
//           </div>
//         </div>
//         <Button className='modeAffichage' onClick={themeToggler}>Mode Nuit</Button>
//       </>
//     </ThemeProvider>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './component/globalStyles';
import { lightTheme, darkTheme } from "./component/Themes"
import { useState } from 'react';
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
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <Router>
            <Header />
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