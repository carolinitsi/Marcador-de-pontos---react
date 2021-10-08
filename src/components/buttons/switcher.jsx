/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import ThemeClaro from "../../assets/img/icon-sol.png";
import ThemeEscuro from "../../assets/img/icon-lua.png";
import {Icone} from '../../assets/styled/icons';


const claro = <Icone src={ThemeClaro} alt="Tema Claro"/>;
const escuro = <Icone src={ThemeEscuro} alt="Tema Escuro" />;

export default ({ tema }) => (tema ? escuro : claro);