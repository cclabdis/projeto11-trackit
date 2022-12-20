import logo from '../../assets/logo.png'
import { Link } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

import { Cont } from "./Cadastro.styled";

export default function Cadastro(){
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [nome, setNome] = useState('')
    const [foto, setFoto] = useState('')
    const navigate = useNavigate();

    function resp (a){
        alert(a)
        setLoading(false)
    }
    function sign(b){
        b.preventDefault();
        setLoading(true)
        let obj = {
            email: email,
            name: nome,
            image: foto,
            password: pass
        }
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', obj)
        promise.then(() => navigate('/'))
        promise.catch((b) => resp(b.response.data.details))
    }
    return (
        <Cont>
            <img alt='logo'src={logo}/>
            <form onSubmit={sign}>
                <input data-test="email-input" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} type='email' placeholder='email'/>
                <input data-test="password-input" required value={pass} onChange={(e) => setPass(e.target.value)} disabled={loading} type='password' placeholder="senha"/>
                <input data-test="user-name-input" required value={nome} onChange={(e) => setNome(e.target.value)} disabled={loading} type='text' placeholder="nome"/>
                <input data-test="user-image-input" required value={foto} onChange={(e) => setFoto(e.target.value)} disabled={loading} type='url' placeholder="foto"/>
                <button data-test="Signup-btn" disabled={loading}>{loading ? <ThreeDots height='20px' color='#ffffff'/> : 'Cadastrar'}</button>
            </form>
            <Link data-reste="signup-btn" data-test="login-link" to='/'>Já tem uma conta? Faça login!</Link>
        </Cont>
    )
}