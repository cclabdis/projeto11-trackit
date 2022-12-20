import lixo from '../../../assets/lixo.png'
import axios from "axios";
import { useContext } from "react";
import AppContext from "../../../AppContext/Context";

import {Dia, Card} from "./CardHabito.styled";

export default function CardHabito(props){
    const dias = props.days
    const {config} = useContext(AppContext)
    const {setReloadV} = useContext(AppContext)
    const {reloadV} = useContext(AppContext)
    function deletar(){
        if(window.confirm('Tem certeza que deseja deletar o hábito?')){
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}`, config)
        promise.then(success)
        promise.catch((e) => console.log(e.response.data.message))}
    }
    function success(){
        setReloadV(reloadV +1)
    }
    return(
        <Card data-test="habit-container"><p data-test="habit-name">{props.name}</p>
            <div>
            <Dia data-test="habit-day" clicado={dias.includes(0)}>D</Dia>
            <Dia data-test="habit-day" clicado={dias.includes(1)}>S</Dia>
            <Dia data-test="habit-day" clicado={dias.includes(2)}>T</Dia>
            <Dia data-test="habit-day" clicado={dias.includes(3)}>Q</Dia>
            <Dia data-test="habit-day" clicado={dias.includes(4)}>Q</Dia>
            <Dia data-test="habit-day" clicado={dias.includes(5)}>S</Dia>
            <Dia data-test="habit-day" clicado={dias.includes(6)}>S</Dia>
            </div>
        <img data-test="habit-delete-btn" onClick={deletar} src={lixo} alt='excluir'/>
        </Card>
    )
}