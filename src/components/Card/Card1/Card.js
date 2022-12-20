
import check from '../../../assets/check.png'
import { ThreeDots } from "react-loader-spinner"
import { useState } from "react"
import axios from "axios"
import { useContext } from "react";
import AppContext from "../../../AppContext/Context";

import {Container, CheckBt, Pontos, Div1, Record} from "./Card.styled";

export default function Card(props){
    const [loading, setLoading] = useState(false)
    const {config} = useContext(AppContext)
    const {setReloadH} = useContext(AppContext)
    const {reloadH} = useContext(AppContext)
    const {setHojeFeitos} = useContext(AppContext)
    const {hojeFeitos} = useContext(AppContext)
    if(props.done && !hojeFeitos.includes(props.id)){
        setHojeFeitos([...hojeFeitos, props.id])
    }
    if(!props.done && hojeFeitos.includes(props.id)){
        const rer = hojeFeitos.filter(j => j!==props.id)
         setHojeFeitos(rer)
    }
    function succes(){
        setLoading(false)
        setReloadH(reloadH+1)
    }
    function fail(e){
        setLoading(false)
        console.log(e.response.data.message)
    }
    function tickar(id){
        setLoading(true)
        if(props.done){
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config)
            promise.then(succes)
            promise.catch(fail)
        } else{
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config)
            promise.then(succes)
            promise.catch(fail)
        }
    }
    return(<Container data-test="today-habit-container">
        <Div1>
            <h1 data-test="today-habit-name">{props.name}</h1>
            <p>Sequência atual: <Pontos data-test="today-habit-sequence" cor={props.done}>{props.atual} dias</Pontos> <br/> Seu recorde: <Record data-test="today-habit-record" cor={props.atual===props.high && props.high!==0}>{props.high} dias</Record></p>
            
        </Div1>
        <CheckBt data-test="today-habit-check-btn" onClick={() => tickar(props.id)}feito={props.done}>{loading ? <ThreeDots height='15px' color='#ffffff'/> : <img src={check} alt='check'/>}</CheckBt>
    </Container>)
}