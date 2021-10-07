/* eslint-disable no-useless-constructor */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./estilo.css";
import girl from '../../assets/img/icon-girl.png';
import monster from '../../assets/img/icon-monster.png';
import {Cabecalho} from '../styled/cabecalho';
import {StyledMenuButton} from '../styled/buttons'
import styled from 'styled-components';


export const Lista = styled.li`
    background-color: ${({ theme }) => theme.cabecalho};
`;


class Menu extends Component {

  constructor(props){
    super(props);
  }
  quantidadeDeBlocos(valor){
    console.log(valor.target.id);
  }

  render() {
    return (
        <div>
            <Cabecalho>
                <Lista className="menu-item"><img src={girl}    alt="Girl"/><StyledMenuButton primario onClick={this.quantidadeDeBlocos} id="2" >  2 Jogadores</StyledMenuButton></Lista>
                <Lista className="menu-item"><img src={monster} alt="Girl"/><StyledMenuButton onClick={this.quantidadeDeBlocos} id="4" >           4 Jogadores</StyledMenuButton></Lista>
                <Lista className="menu-item"><img src={girl}    alt="Girl"/><StyledMenuButton primario onClick={this.quantidadeDeBlocos} id="6" >  6 Jogadores</StyledMenuButton></Lista>
                <Lista className="menu-item"><img src={monster} alt="Girl"/><StyledMenuButton onClick={this.quantidadeDeBlocos} id="8" >           8 Jogadores</StyledMenuButton></Lista>
                <Lista className="menu-item"><img src={girl}    alt="Girl"/><StyledMenuButton primario onClick={this.quantidadeDeBlocos} id="10"> 10 Jogadores</StyledMenuButton></Lista>
            </Cabecalho>
        </div>
      );
    }
  }
  
  export default Menu;