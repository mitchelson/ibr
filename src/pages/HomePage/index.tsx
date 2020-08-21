import React, { useState, useEffect } from 'react';
import WorkerItem from '../../components/WorkerItem';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import api from '../../services/api';

function HomePage() {
    const [funcao, setFuncao] = useState([])
    const [users, setUsers] = useState([])
    useEffect(()=>{
        api.get('users').then(users => {
            setUsers(users.data);
            console.log(users)
        })
    },[])
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os funcionários cadastrados">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Nome</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Função</label>
                        <select id="week_day" >
                            <option value="" disabled selected>Selecione</option>
                            {funcao.map(fun => (
                                <option>Pedagogo</option>
                            ))}
                        </select>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Status</label>
                        <select id="time" >
                            <option value="" disabled selected>Selecione</option>
                            <option>Ativo</option>
                            <option>Desligado</option>
                        </select>
                    </div>
                </form>
            </PageHeader>
            <main>
                {users.map(user => {
                    <WorkerItem name="a" occupation="b" descrition="b" status="b" register={0} />
                })}
            </main>
        </div>
    )
}
export default HomePage;