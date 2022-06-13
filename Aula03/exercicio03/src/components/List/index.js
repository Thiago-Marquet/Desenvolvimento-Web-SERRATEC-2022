import React,{ useState } from 'react';

const Lista = () =>{

    const [listaTarefas, setListaTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState();

    const adicionaTarefa = () => {
        setListaTarefas([...listaTarefas, novaTarefa]);
    }

    const limpaTarefas = () => {
        setListaTarefas([]);
    }

    return (
        <div>
            <h1>Tarefas</h1>
            <ul>
                {listaTarefas.length === 0 ? <p> Não existem tarefas</p> : 
                listaTarefas.map((tarefas, index) => ( <li key={index}>{index + 1} : {tarefas} </li> ))}
            </ul>
            <input type="text" value={novaTarefa} onChange={(e) => setNovaTarefa(e.target.value)}/>
            <br />
            <button onClick={adicionaTarefa}> Adicionar</button>
            <button onClick={limpaTarefas}> Limpar</button>
        </div>
    );

}

export default Lista;