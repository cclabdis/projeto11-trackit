import styled from "styled-components"

export const Card = styled.div`
width: 100%;
height: 90px;
background: #FFFFFF;
border-radius: 5px;
padding: 13px;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-block: 10px;
p{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #666666;
margin-top: 0;
}
div{display:flex;
    margin-block: 3px;
}
img{
    width: 13px;
    position: absolute;
    right: 7.47%;
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