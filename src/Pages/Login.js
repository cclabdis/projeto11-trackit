import styled from "styled-components"
import logo from '../assets/logo.png'
import { Link } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../AppContext/Context";
export default function Login(){
    const {setTok} = useContext(AppContext)
    const {setIm} = useContext(AppContext)
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate();
    function re(a){
        alert(a)
        setLoading(false)
    }
    function success(e){
        setTok(e.data.token)
        setIm(e.data.image)
        navigate('/hoje')
    }
    function login(e){
        e.preventDefault();
        setLoading(true)
        let obj = {
            email: email,
            password: pass
        }
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', obj)
        promise.then((e) => success(e))
        promise.catch((e) => re(e.response.data.details))
    }
    
    return (
        <Cont>
            <img alt='logo' src={logo}/>
            <form onSubmit={login}>
                <input data-test="email-input" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} type='email' placeholder='email'/>
                <input data-test="password-input" required value={pass} onChange={(e) => setPass(e.target.value)} disabled={loading} type='password' placeholder="senha"/>
                <button data-test="login-btn" disabled={loading}>{loading ? <ThreeDots height='20px' color='#ffffff'/> : 'Entrar'}</button>
            </form>
            <Link data-test="Cadastro-link" to='/cadastro'>Não tem uma conta? Cadastre-se!</Link>
        </Cont>
    )
}

const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 40px;
img{
    width: 180px;
    margin-block: 30px;
}
input{
    margin-block: 3px;
    width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
padding-left: 10px;
}
input::placeholder{font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;color: #DBDBDB;}
input:disabled{
    background: #F2F2F2;
    color: #AFAFAF;
}
button{
    width: 303px;
height: 45px;
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;
color: #FFFFFF;
margin-block: 3px;
*{justify-content: center;}
}
button:disabled{opacity: 0.7;}
button:hover{
    cursor:pointer;
}
a{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
color: #52B6FF;
margin-block: 22px;
}
form{
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
`