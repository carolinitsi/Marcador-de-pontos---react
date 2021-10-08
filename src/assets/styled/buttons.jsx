import styled from 'styled-components';


export const EstiloBtn = styled.button`
  position: absolute;
  right: 0;
`;

export const StyledMenuButton = styled.button`
  background:${({ theme }) => theme.cabecalho};
  border:none;
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  display: flex;
  border: solid 4px ${({ theme }) => theme.cabecalho}; ;
  padding:20px;
  border-color: ${(props) => (props.primario ? "none" : "rgb(143, 114, 250)" )}; /* se passar uma props como 'primario' fica red, se não fica a outra cor*/

  @media(max-width: 599px){

  }
  `;