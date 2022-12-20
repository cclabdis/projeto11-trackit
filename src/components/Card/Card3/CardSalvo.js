import { useState } from "react"
import { useContext } from "react";
import AppContext from "../../../AppContext/Context";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import {Card, Dia, DivSemana, DivButton} from "./CardSalvo.styled";

export default function CardSalvo(){
    const [loading, setLoading] = useState(false)
    const {setSave} = useContext(AppContext)
    const {config} = useContext(AppContext)
    const {nomeH} = useContext(AppContext)
    const {setnomeH} = useContext(AppContext)
    const {dias} = useContext(AppContext)
    const {setDias} = useContext(AppContext)
    const {setReloadV} = useContext(AppContext)
    const {reloadV} = useContext(AppContext)
    function salvarDia(i){
        if(dias.includes(i)){
            const rer = dias.filter(j => j!==i)
            setDias(rer)
        } else{
            setDias([...dias, i])
        }
    }
    function cancelar(){
        setSave('')
    }
    function succes(){
        setSave('')
        setLoading(false)
        setReloadV(reloadV+1)
        setnomeH('')
        setDias([])
    }
    function fail(e){
        setLoading(false)
        alert(e.response.data.message)
    }
    function salvarHabito(){
        if(nomeH === ''){
            alert('Escreva o nome do hábito')
            return
        }
        if(dias.length === 0){
            alert('Selecione pelo menos 1 dia')
            return
        }
        setLoading(true)
        const obj = {
            name: nomeH,
            days: dias 
        }
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', obj, config)
        promise.then(succes)
        promise.catch(fail)
    }
    return(
    <Card data-test="habit-create-container">
        <DivSemana>
            <input data-test="habit-name-input" disabled={loading} type='text' value={nomeH} onChange={(e) => setnomeH(e.target.value)} placeholder='nome do hábito'/>
            <div>
                <Dia data-test="habit-day" disabled={loading} clicado={dias.includes(0)} onClick={() => salvarDia(0)}>D</Dia>
                <Dia data-test="habit-day" disabled={loading} clicado={dias.includes(1)} onClick={() => salvarDia(1)}>S</Dia>
                <Dia data-test="habit-day" disabled={loading} clicado={dias.includes(2)} onClick={() => salvarDia(2)}>T</Dia>
                <Dia data-test="habit-day" disabled={loading} clicado={dias.includes(3)} onClick={() => salvarDia(3)}>Q</Dia>
                <Dia data-test="habit-day" disabled={loading} clicado={dias.includes(4)} onClick={() => salvarDia(4)}>Q</Dia>
                <Dia data-test="habit-day" disabled={loading} clicado={dias.includes(5)} onClick={() => salvarDia(5)}>S</Dia>
                <Dia data-test="habit-day" disabled={loading} clicado={dias.includes(6)} onClick={() => salvarDia(6)}>S</Dia>
            </div>
        </DivSemana>
        <DivButton>
            <p data-test="habit-create-cancelar-btn" disabled={loading} onClick={cancelar}>cancelar</p><button data-test="habit-create-save-btn" disabled={loading} onClick={salvarHabito}>{loading ? <ThreeDots height='12px' color='#ffffff'/> : 'Salvar'}</button>
        </DivButton>
    </Card>
    )
}