import styled from "styled-components"

export const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 40px;
img{
    width: 180px;
    margin-block: 30px;
}
input{
    margin-block: 3px;
    width: 303px;
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
}
input::placeholder{font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;color: #DBDBDB;}
input:disabled{
    background: #F2F2F2;
    color: #AFAFAF;
}
button{
    width: 303px;
height: 45px;
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;
color: #FFFFFF;
margin-block: 3px;
*{justify-content: center;}
}
button:disabled{opacity: 0.7;}
button:hover{
    cursor:pointer;
}
a{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
color: #52B6FF;
margin-block: 22px;
}
form{
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
`