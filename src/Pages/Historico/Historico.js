import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"

import { GlobalStyle, Title, Paragrafo } from "./Historico.styled";

export default function Historico(){
    return (
        <>
        <GlobalStyle />
        <Header/>
        <Title>Histórico</Title>
        <Paragrafo>Em breve você poderá ver o histórico dos seus hábitos aqui!</Paragrafo>
        <Menu/>
        </>
    )
}