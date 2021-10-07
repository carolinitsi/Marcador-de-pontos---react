/* eslint-disable no-unused-vars */
import './App.css';
import { ThemeProvider } from 'styled-components';
import { temaClaro, temaEscuro } from '../src/components/styled/temas'
import { estiloBtn } from '../src/components/styled/buttons';
import Menu from './components/menu/menu'
import OrganizaBlocos from './components/pasta-teste/teste'
import React, { useState } from 'react';
import { GlobalStyle } from './components/styled/globalstyle';
import SwitcherTema from './components/buttons/switcher';
import Formulario from './components/formulario/formulario';
import Lista from './components/pasta-teste/lista';


function App() {
  const [tema, setTema] = useState(true);
  const [Lista, setLista] = useState("");
  const toggleTema = () => {
    setTema((tema) => !tema);
  };

  
  return(
    <div className="App">
      <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
          <GlobalStyle />
          <estiloBtn onClick={toggleTema}>
            <SwitcherTema tema={tema} />
          </estiloBtn>
          <Menu/>
          <Formulario/>
      </ThemeProvider>
    </div>
  );
  }
  

export default App;
