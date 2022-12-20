import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import CardSalvo from "../../components/Card/Card3/CardSalvo"
import { useContext, useState } from "react";
import AppContext from "../../AppContext/Context";
import { useEffect } from "react"
import axios from "axios"
import CardHabito from "../../components/Card/Card2/CardHabito"

import { GlobalStyle, Cont, Create } from "./Habitos.styled";

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