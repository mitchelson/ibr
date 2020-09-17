import React, {useState} from 'react';
import landingImg from '../../assets/images/IBR_LOGO.svg';
import './styles.css';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory({forceRefresh:true});

function Login() {
    function handleLogin(){
        if(login === "admin" && senha === "1234"){
            history.push("/");
        }else {
            alert("Login ou senha inválidos!")
        }
    }
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    return (
        <div id="page-landing">
            <div className="topLogo">
                <img src={landingImg} alt="Logo"/>
            </div>
            <form className="login" onSubmit={handleLogin}>
                <div className="inputBlock">
                    <label> Login </label>
                    <input required type="text" value={login} onChange={(e) => (setLogin(e.target.value))}/>
                </div>
                <div className="inputBlock">
                    <label> Senha </label>
                    <input required type="password"value={senha} onChange={(e) => (setSenha(e.target.value))}/>
                </div>
                <div className="inputBlock">
                    <button type="submit">Entrar</button>    
                </div>
                <div className="suport">
                    Esqueceu a senha?<br/>Ligue para o Suporte
                </div>
                <div className="footer">
                    Todos os direitos reservados 
                </div>
            </form>
        </div>
    )
}
export default Login;