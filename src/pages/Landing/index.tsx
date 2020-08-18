import React from 'react';
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcons from '../../assets/images/icons/purple-heart.svg'

import './styles.css';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div id="page-landing">
            <div className="topLogo">
                <img src={landingImg} alt="Logo"/>
            </div>
            <div className="login">
                <div className="inputBlock">
                    <label> Login </label>
                    <input type="text"/>
                </div>
                <div className="inputBlock">
                    <label> Senha </label>
                    <input type="password"/>
                </div>
                <Link to="/study" className="inputBlock">
                    <button>Entrar</button>    
                </Link>
                <div className="suport">
                    Esqueceu a senha?<br/>Ligue para a TI
                </div>
                <div className="footer">
                    Todos os direitos reservados 
                </div>
            </div>
        </div>
    )
}
export default Landing;