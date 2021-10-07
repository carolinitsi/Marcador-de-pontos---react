import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {StyleFormulario}  from '../styled/formulario';
import OrganizaBlocos from '../pasta-teste/teste';
import { render } from '@testing-library/react';
import Bloco from '../bloco/bloco';
import {StyledBoxBlocos} from '../styled/blocos';



function Formulario( ){
    
    const [nome, setNome] = useState("");
    const [jogadores, setJogadores] = useState([]);
    
    const addJogador = () =>{
        setJogadores([ {
            id: jogadores.length,
            nome: nome
        }])
        console.log(jogadores);
        criaBloco(jogadores,nome);

    }

    function criaBloco(jogadores,nome){
        return (
            <StyledBoxBlocos>
                {jogadores.map(({id,nome})=>{
                    console.log(id,nome);
                    <Bloco key={id} color="#f75e5e" nome={nome}/>
                })} 
            </StyledBoxBlocos>
        )
    }
        
    
    return(              
                <StyleFormulario onSubmit={(event) => {
                        event.preventDefault();
                         addJogador();
                    }} >
                        <h2>Adicione jogadores:</h2>  
                        <TextField                    
                            id="nome"
                            label="Nome do jogador o time:"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            onChange={(event)=>{
                                setNome(event.target.value);
                            }}
                        />               
                        <Button type="submit" variant="contained" color="primary">
                        Cadastrar
                        </Button>
                </StyleFormulario>

            )
}
    export default Formulario;