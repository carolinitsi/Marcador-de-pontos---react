import styled from 'styled-components';


export const Icone = styled.img`
  height: 25px;
  width: 25px;
  position:absolute;
  right:50px;
  background:${({ theme }) => theme.cabecalho};
  ;
  cursor:pointer;
`;