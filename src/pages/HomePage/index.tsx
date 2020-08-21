import React, { useState, useEffect } from 'react';
import WorkerItem from '../../components/WorkerItem';
import PageHeader from '../../components/PageHeader';
import { GetUsers } from '../../components/WorkerItem';
import './styles.css';
import api from '../../services/api';

function HomePage() {
    const [funcao, setFuncao] = useState([]);
    const [statusFilter, setStatus] = useState('');
    const [inputName, setinputName] = useState('');
    const [selectOccupation, setOccupation] = useState('');
    const [users, setUsers] = useState<GetUsers[]>([]);
    useEffect(()=>{
        api.get('users').then((user) => {
            setUsers(user.data);
        });
    },[]);
    function filter(funcao: String, nome: String, status: String) {
        console.log(users.find((name: GetUsers) => nome))
    }
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os funcionários cadastrados">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Nome</label>
                        <input type="text" id="subject" value={inputName} onChange={(e) => setinputName(e.target.value)}/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Função</label>
                        <select id="time" onChange={(e) => {setOccupation(e.target.value); filter(inputName, statusFilter, selectOccupation)}}>
                            <option value={0}>Selecione</option>
                            <option value={1}>Professor</option>
                            <option value={2}>Recursos humanos</option>
                        </select>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Status</label>
                        <select id="time" onChange={(e) => {setStatus(e.target.value); filter(inputName, statusFilter, selectOccupation)}}>
                            <option value={0}>Selecione</option>
                            <option value={1}>Ativo</option>
                            <option value={2}>Desligado</option>
                        </select>
                    </div>
                </form>
            </PageHeader>
            <main>
                {users.map(user => {
                    console.log(user)
                    return(
                        <WorkerItem name={user.name} occupation={user.occupation} description={user.description} status={(user.status)} register={user.register} />
                    )
                })}
            </main>
        </div>
    )
}
export default HomePage;