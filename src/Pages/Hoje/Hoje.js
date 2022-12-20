import { useContext, useState } from "react";
import AppContext from "../../AppContext/Context";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Day from "../../components/Day";
import Card from "../../components/Card/Card1/Card";
import axios from "axios";
import { useEffect } from "react";

import { Sts, GlobalStyle, Data } from "./Hoje.styled";


export default function Hoje() {
  const [dayHabits, setDayHabits] = useState([])
  const { config } = useContext(AppContext)
  const {reloadHoje} = useContext(AppContext)
  const {setdiaFeito} = useContext(AppContext)
  const {Feito} = useContext(AppContext)
  const {diaFeito} = useContext(AppContext)
  function success(e){
    setDayHabits(e.data)
    setdiaFeito(e.data.length)
  }
  useEffect(() => {
    const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
    promise.then(success)
    promise.catch((e) => alert(e.response.data.message))
  }, [reloadHoje])
  if (dayHabits.length === 0) {
    return (<>
      <GlobalStyle />
      <Header />
      <Data data-test="today">{Day}</Data>
      <Sts data-test="today-counter">Nenhum hábito concluído ainda</Sts>
      <Menu />
    </>)
  }
  return (
    <>
      <GlobalStyle />
      <Header />
      <Data data-test="today">{Day}</Data>
      <Sts data-test="today-counter" cor={Feito.length===0} >{Feito.length===0 ? 'Nenhum hábito concluído ainda' : `${((Feito.length / diaFeito)*100).toFixed(0)}% dos hábitos concluídos`}</Sts>
      {dayHabits.map((i) => <Card key={i.id} id={i.id} name={i.name} done={i.done} atual={i.currentSequence} high={i.highestSequence} />)}
      <Menu />
    </>
  )
}