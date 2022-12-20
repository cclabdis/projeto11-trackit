import styled from "styled-components"

export const Bar = styled.div`
width: 100%;
height: 70px;
left: 0px;
bottom: 0px;
background: #FFFFFF;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
padding-inline: 35px;
p{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #52B6FF;
}
button{
    width: 91px;
height: 91px;
border-radius: 45.5px;
background: #52B6FF;
position: fixed;
left: calc(50% - 45.5px);
bottom: 18px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #FFFFFF;
}
`