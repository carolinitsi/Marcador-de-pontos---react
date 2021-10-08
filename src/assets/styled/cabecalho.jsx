import styled from 'styled-components';


export const Cabecalho = styled.ul`
    background-color: ${({ theme }) => theme.cabecalho};
    display:flex;
`;

export const Cabecalho_lista = styled.li`
    list-style: none;
    margin: 5%;
    color: rgb(143, 114, 250);
`