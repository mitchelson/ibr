import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/19330404?s=460&u=92bd2475bcc9f12388b323926fd0d8212de0de64&v=4" alt="Mitchelson" />
                <div>
                    <strong>Mitchelson P da Silva</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Texto de Matemática
                        <br /><br />
                        Texto de matemática para explicar a materia que o professor ministra
                    </p>
            <footer>
                <p>
                    Preço/Hora
                            <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}
export default TeacherItem;