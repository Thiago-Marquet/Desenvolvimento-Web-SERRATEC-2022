import React,{ useState } from 'react';
import "./styles.css"

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
        <>
            <h1>Tarefas</h1>
            <div className="div-tarefas">
                <ul>
                    {listaTarefas.length === 0 ? <p> Não existem tarefas</p> :
                        listaTarefas.map((tarefas, index) => (<li key={index}>Tarefa {index + 1} : {tarefas} </li>))}
                </ul>
            </div>
            <div className="div-input-btn">
                <input type="text" value={novaTarefa} onChange={(e) => setNovaTarefa(e.target.value)} />
                <button onClick={adicionaTarefa}> Adicionar</button>
                <button onClick={limpaTarefas}> Limpar</button>
            </div>
        </>
    );

}

export default Lista;