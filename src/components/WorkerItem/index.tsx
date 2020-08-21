import React, { useEffect, useState } from 'react';
import './styles.css';

export interface GetUsers {
    name: String,
    occupation: String,
    status: Boolean,
    description: String,
    register: number
}

const WorkerItem: React.FC<GetUsers> = ({name, occupation, status, description, register}) => {
    const [statusJob, setStatus] = useState('Desligado');
    useEffect(()=> {
        if (status) {
            setStatus('Ativo')
        }
    }, [])
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/19330404?s=460&u=92bd2475bcc9f12388b323926fd0d8212de0de64&v=4" alt="Mitchelson" />
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
                <button type="button">
                    Ver Registros
                </button>
                <button type="button">
                    Adicionar Registro
                </button>
            </footer>
        </article>
    )
}
export default WorkerItem;