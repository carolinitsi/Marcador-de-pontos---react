/* eslint-disable no-unused-vars */
import './App.css';
import { ThemeProvider } from 'styled-components';
import { temaClaro, temaEscuro } from './assets/styled/temas'
import {EstiloBtn } from './assets/styled/buttons';
import Menu from './components/menu/menu'
import React, { useState } from 'react';
import { GlobalStyle } from './assets/styled/globalstyle';
import SwitcherTema from './components/buttons/switcher';
import Formulario from './components/formulario/formulario';


function App() {
  const [tema, setTema] = useState(true);
  const toggleTema = () => {
    setTema((tema) => !tema);
  };

  
  return(
    <div className="App">
      <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
          <GlobalStyle />
          <EstiloBtn onClick={toggleTema}>
            <SwitcherTema tema={tema} />
          </EstiloBtn>
          <Menu/>
          <Formulario/>
      </ThemeProvider>
    </div>
  );
  }
  

export default App;
