import styled from "styled-components"

export const Card = styled.div`
width: 100%;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
padding: 18px;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-block: 10px;
`
export const DivSemana = styled.div`
margin: 0;
input{
width: 95%;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
padding-left: 10px;
margin:0;
}
input:disabled{
    background: #F2F2F2;
    color: #B3B3B3;
}
input::placeholder{
color: #DBDBDB;
}
div{display:flex;
    margin-block: 3px;
}
`
export const DivButton = styled.div`
display: flex;
justify-content: end;
align-items: center;
margin: 0;
p{font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
text-align: center;
color: #52B6FF;}
button{
    margin-left: 23px;
    width: 84px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
}
`
export const Dia = styled.button`
width: 30px;
height: 30px;
background: ${props => props.clicado ? '#CFCFCF' : '#FFFFFF'};
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-inline: 2px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: ${props => props.clicado ? '#FFFFFF' : '#DBDBDB'};
margin-block:5px;
`