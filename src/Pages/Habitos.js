import Header from "../components/Header/Header"
import Menu from "../components/Menu/Menu"
import { createGlobalStyle } from 'styled-components'
import styled from "styled-components"
import CardSalvo from "../components/Card/Card3/CardSalvo"
import { useContext, useState } from "react";
import AppContext from "../AppContext/Context";
import { useEffect } from "react"
import axios from "axios"
import CardHabito from "../components/Card/Card2/CardHabito"
export default function Habitos(){
    const {config} = useContext(AppContext)
    const {setSave} = useContext(AppContext)
    const {save} = useContext(AppContext)
    const {reloadV} = useContext(AppContext)
    const [cards, setCards] = useState([])
    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
        promise.then((e) => setCards(e.data))
        promise.catch((e) => console.log(e.response.data.message))
    }, [reloadV])
    function abrir(){
        setSave(<CardSalvo />)
    }
    if(cards.length===0){
    return (
        <>
        <GlobalStyle/>
        <Header/>
        <Cont>
            <Create><h1>Meus hábitos</h1><button data-test="habit-create-btn" onClick={abrir}>+</button></Create>
            {save}
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </Cont>
        <Menu/>
        </>
    )}
    return (
        <>
        <GlobalStyle/>
        <Header/>
        <Cont>
            <Create><h1>Meus hábitos</h1><button onClick={abrir}>+</button></Create>
            {save}
            {cards.map((i) => <CardHabito id={i.id} key={i.id} name={i.name} days={i.days}/>)}
        </Cont>
        <Menu/>
        </>
    )
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color:  #F2F2F2;
  }
`
const Cont = styled.div`
margin-top: 100px;
margin-bottom: 110px;
display: flex;
flex-direction: column;
align-items: center;
width:100%;
padding-inline:17px;
p{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #666666;
}
`
const Create = styled.div`
width:100%;
display: flex;
justify-content: space-between;
margin-bottom:10px;
h1{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
}
button{
    width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4.5px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 27px;
line-height: 35px;
color: #FFFFFF;
padding: 0px;
}
`