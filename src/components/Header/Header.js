import { useContext } from "react";
import AppContext from "../../AppContext/Context";
import {Bar} from "./Header.styled";

export default function Header(){
    const {obj} = useContext(AppContext)
    return(
        <Bar data-test="header"><h1>TrackIt</h1><img src={obj.image} alt='usuario'/></Bar>
    )
}