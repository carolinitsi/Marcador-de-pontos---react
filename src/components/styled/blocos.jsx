import styled from 'styled-components';

export const StyledBoxBlocos = styled.div`
    display: flex;
    flex-direction: rows;
    flex-wrap: wrap;
    justify-content: space-between;
    width:100%;
    margin: 5% auto;

    @media(max-width: 599px){
        flex-direction: column;
    }
`;

 export const StyledBloco = styled.div`
    background-color: ${({ theme }) => theme.box};
    border-radius: 5px;
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    width:25%;
    padding:50px;
    margin:10px;

    @media(max-width: 599px){
        width:100%;
    }
`;

export const StyledBoxButton = styled.div`
    display: flex;
    flex-direction: rows;
    justify-content: center;
    width:100%;
`;
export const StyledButton = styled.div`
    display: flex;
    flex-direction: rows;
    justify-content: space-between;
    border: 0;
    width: 50px;
    margin:5px;
    padding: 20px 20px;
`;