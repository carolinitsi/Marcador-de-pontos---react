/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
/* import "./estilo.css";*/
import {StyledButton} from '../../assets/styled/blocos';
import styled from 'styled-components';
import { corPrimariaTexto } from '../../assets/styled/variaveis';
import { StyledBloco, StyledBoxButton } from '../../assets/styled/blocos';



class Bloco extends Component {

  minhaFuncao(){
    this.setState = {
      contador:  this.state.contador + 1
    }
  }
  constructor(props){
    super(props);

    this.state = {
      contador: 0,
    }
  }
    render() {
      const buttonColor = {
        backgroundColor: this.props.color,
      };
      return (
        <StyledBloco>
            <h3>{this.props.nome}</h3> 
            <p>Sua pontuação atual é:</p>
            <h1>{this.state.contador}</h1>
            <StyledBoxButton>
              <StyledButton onClick={() => this.setState({ contador: this.state.contador + 1})} style={buttonColor} > + </StyledButton>
              <StyledButton onClick={() => this.setState({ contador: this.state.contador - 1})} style={buttonColor} > - </StyledButton>
            </StyledBoxButton>
        </StyledBloco>
      );
    }
  }
  
  export default Bloco;