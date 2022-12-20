import styled from "styled-components"
import logo from '../assets/logo.png'
import { Link } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
export default function Cadastro(){
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [nome, setNome] = useState('')
    const [foto, setFoto] = useState('')
    const navigate = useNavigate();
    function re(a){
        alert(a)
        setLoading(false)
    }
    function sign(e){
        e.preventDefault();
        setLoading(true)
        let obj = {
            email: email,
            name: nome,
            image: foto,
            password: pass
        }
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', obj)
        promise.then(() => navigate('/'))
        promise.catch((e) => re(e.response.data.details))
    }
    return (
        <Cont>
            <img alt='logo'src={logo}/>
            <form onSubmit={sign}>
                <input data-test="email-input" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} type='email' placeholder='email'/>
                <input data-test="password-input" required value={pass} onChange={(e) => setPass(e.target.value)} disabled={loading} type='password' placeholder="senha"/>
                <input data-test="user-name-input" required value={nome} onChange={(e) => setNome(e.target.value)} disabled={loading} type='text' placeholder="nome"/>
                <input data-test="user-image-input" required value={foto} onChange={(e) => setFoto(e.target.value)} disabled={loading} type='url' placeholder="foto"/>
                <button data-test="Cadastro-btn" disabled={loading}>{loading ? <ThreeDots height='20px' color='#ffffff'/> : 'Cadastrar'}</button>
            </form>
            <Link data-test="login-link" to='/'>Já tem uma conta? Faça login!</Link>
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