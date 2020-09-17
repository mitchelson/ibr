import React from 'react';
import PageHeader from '../../components/PageHeader';
import WorkerItem from '../../components/WorkerItem';

import './styles.css';

function NewRegister() {
    
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Cadastro de novo registro de Funcionário">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Nome</label>
                        <input disabled id="subject" value={'Mitchelson P da Silva'}/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Função</label>
                        <input id="time" value={'Técnico em Informática'} disabled />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Status</label>
                        <input value={'Desligado'} disabled          id="time" />
                    </div>
                </form>
            </PageHeader>
            <main>
                {/* <WorkerItem avatar="https://avatars2.githubusercontent.com/u/19330404?s=460&u=92bd2475bcc9f12388b323926fd0d8212de0de64&v=4" name="Mitchelson P. da Silva" occupation="Técnico em Informática" description="Desenvolve atividades voltadas a área de tecnologia e informática" status={(false)} register={0} />
                    {users.map(user => {
                        console.log(user)
                        return(
                            <WorkerItem avatar={user.name} name={user.name} occupation={user.occupation} description={user.description} status={(user.status)} register={user.register} />
                        )
                    })} */}
            </main>
        </div>
    )
}
export default NewRegister;