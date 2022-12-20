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
  const {reloadH} = useContext(AppContext)
  const {setHojeTotal} = useContext(AppContext)
  const {hojeFeitos} = useContext(AppContext)
  const {hojeTotal} = useContext(AppContext)
  function success(e){
    setDayHabits(e.data)
    setHojeTotal(e.data.length)
  }
  useEffect(() => {
    const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
    promise.then(success)
    promise.catch((e) => alert(e.response.data.message))
  }, [reloadH])
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
      <Sts data-test="today-counter" cor={hojeFeitos.length===0} >{hojeFeitos.length===0 ? 'Nenhum hábito concluído ainda' : `${((hojeFeitos.length / hojeTotal)*100).toFixed(0)}% dos hábitos concluídos`}</Sts>
      {dayHabits.map((i) => <Card key={i.id} id={i.id} name={i.name} done={i.done} atual={i.currentSequence} high={i.highestSequence} />)}
      <Menu />
    </>
  )
}