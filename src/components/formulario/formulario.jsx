import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {StyleFormulario}  from '../../assets/styled/formulario';
import Bloco from '../bloco/bloco';
import {StyledBoxBlocos} from '../../assets/styled/blocos';



function Formulario( ){
    
    const [jogadores, setJogadores] = useState([]);
    const [id, setId] = useState(1);
    const [nome, setNomejogador] = useState("");
    
    const addJogador = (event) =>{
        setJogadores( [...jogadores, {
            id: id,
            nome: nome
        }])
        setId(id+1);
        console.log(jogadores);

    }
  
    return(     
        <div>        
                <StyleFormulario onSubmit={(event) => {
                        event.preventDefault();
                        addJogador(event);
                    }} >
                        <h2>Adicione jogadores:</h2>  
                        <TextField                    
                            id="nome"
                            label="Digite um nome para o jogador / time..."
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name= "nomeJogador"  
                            onChange={(event) => {
                                setNomejogador(event.target.value);
                              }} 
                         />               
                        <Button type="submit" variant="contained" color="primary">
                        Adicionar jogador
                        </Button>
                </StyleFormulario>
                <StyledBoxBlocos>
                    {jogadores.map(({id,nome})=>{
                        return(
                            <Bloco key={id} color="#f75e5e" nome={nome}/>
                        )
                        
                    } )}
                </StyledBoxBlocos>
            </div> 

            )
}
    export default Formulario;