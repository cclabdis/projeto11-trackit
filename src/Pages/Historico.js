import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import Header from "../components/Header/Header"
import Menu from "../components/Menu/Menu"
export default function Historico(){
    return (
        <>
        <GlobalStyle />
        <Header/>
        <Title>Histórico</Title>
        <Parag>Em breve você poderá ver o histórico dos seus hábitos aqui!</Parag>
        <Menu/>
        </>
    )
}
const GlobalStyle = createGlobalStyle`
  body {
    background-color:  #F2F2F2;
  }
`
const Title = styled.h1`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
margin-top: 100px;
margin-left: 17px;
margin-bottom: 17px;
`
const Parag = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
margin-left: 17px;
color: #666666;`