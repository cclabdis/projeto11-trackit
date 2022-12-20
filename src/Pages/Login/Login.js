import logo from '../../assets/logo.png'
import { Link } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../AppContext/Context";

import { Cont } from './Login.styled';

export default function Login(){
    const {setToken} = useContext(AppContext)
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
        setToken(e.data.token)
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
            <Link data-reste="signup-btn"  data-test="signup-link" to='/cadastro'>Não tem uma conta? Cadastre-se!</Link>
        </Cont>
    )
}