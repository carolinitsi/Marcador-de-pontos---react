import styled from 'styled-components';


export const Cabecalho = styled.ul`
    background-color: ${({ theme }) => theme.cabecalho};
    display:flex;
    width:100%
    margin:0 auto;
`;

export const Cabecalho_lista = styled.li`
    list-style: none;
    margin: 20px 5%;
    color: rgb(143, 114, 250);
    background:${({ theme }) => theme.cabecalho};
    width:10%;
    display:flex;
`
export const Icon = styled.img`
    width:40px;

`