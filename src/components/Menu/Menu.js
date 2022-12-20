import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../AppContext/Context";

import {Bar} from "./Menu.styled";

export default function Menu(){
    const {Feito} = useContext(AppContext)
    const {diaFeito} = useContext(AppContext)
    const navigate = useNavigate()
    return (
        <Bar data-test="menu">
            <p data-test="habit-link" onClick={() => navigate('/habitos')}>Hábitos</p>
            <button data-test="today" onClick={() => navigate('/hoje')}><CircularProgressbar value={(Feito.length / diaFeito)*100} text="Hoje" strokeWidth='10'
            styles={buildStyles({
                rotation: 0,
                strokeLinecap: 'round',
                textSize: '20px',
                pathTransitionDuration: 0.5,
                pathColor: `#ffffff`,
                textColor: '#ffffff',
                trailColor: '#52B6FF',
              })}
            /></button>
            <p data-test="history-link" onClick={() => navigate('/historico')}>Histórico</p>
        </Bar>
    )
}
