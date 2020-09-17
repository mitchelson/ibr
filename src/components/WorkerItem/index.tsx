import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

export interface GetUsers {
    avatar: string,
    name: string,
    occupation: string,
    status: boolean,
    description: string,
    register: number
}

const WorkerItem: React.FC<GetUsers> = ({avatar, name, occupation, status, description, register}) => {
    const [statusJob, setStatus] = useState('Desligado');
    useEffect(()=> {
        if (status) {
            setStatus('Ativo')
        }
    }, [])
    return (
        <article className="teacher-item">
            <header>
                <img src={avatar} alt="Mitchelson" />
                <div>
                    <strong>{name}</strong>
                    <span>{occupation}</span>
                </div>
            </header>
            <p>
                Status: {statusJob}
                        <br /><br />
                        Descrição: {description}
                    </p>
            <footer>
                <p>
                    Registros
                            <strong>{register}</strong>
                </p>
                <NavLink to="/new-register">
                    <button type="button">
                        Ver Registros
                    </button>
                </NavLink>
                <NavLink to="/new-register">
                    <button type="button">
                        Adicionar Registro
                    </button>
                </NavLink>
                
            </footer>
        </article>
    )
}
export default WorkerItem;