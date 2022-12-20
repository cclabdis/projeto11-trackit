import { useContext, useState } from "react";
import AppContext from "../AppContext/Context";
import Header from "../components/Header/Header";
import styled, { createGlobalStyle } from 'styled-components'
import Menu from "../components/Menu/Menu";
import Day from "../components/Day";
import Card from "../components/Card/Card1/Card";
import axios from "axios";
import { useEffect } from "react";


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
      <Stats data-test="today-counter">Nenhum hábito concluído ainda</Stats>
      <Menu />
    </>)
  }
  return (
    <>
      <GlobalStyle />
      <Header />
      <Data data-test="today">{Day}</Data>
      <Stats data-test="today-counter" cor={hojeFeitos.length===0} >{hojeFeitos.length===0 ? 'Nenhum hábito concluído ainda' : `${((hojeFeitos.length / hojeTotal)*100).toFixed(0)}% dos hábitos concluídos`}</Stats>
      {dayHabits.map((i) => <Card key={i.id} id={i.id} name={i.name} done={i.done} atual={i.currentSequence} high={i.highestSequence} />)}
      <Menu />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color:  #F2F2F2;
  }
`
const Data = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
margin-top: 100px;
margin-left: 17px;
margin-bottom: 3px;
`
const Stats = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: ${props => props.cor ? '#BABABA' : '#8FC549'};
margin-left: 17px;
margin-bottom: 23px;
`