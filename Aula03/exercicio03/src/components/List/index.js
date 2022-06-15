import React,{ useState } from 'react';
import {Link, useLocation} from 'react-router-dom'
import "./styles.css"

const Lista = () =>{

    const location = useLocation();

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
            <div>
                <h1>{location.state}</h1>
                <Link to={"/"}>Home</Link> <Link to={"/exercicios"}>| Exercícios</Link>
            </div>
            <div className="div-tarefas">
                <ul>
                    {listaTarefas.length === 0 ? <span> Não existem tarefas</span> :
                        listaTarefas.map((tarefas, index) => (<li key={index}><span>Tarefa {index + 1} :</span> {tarefas} </li>))}
                </ul>
            </div>
            <div className="div-input-btn">   
                <textarea name="" id="" cols="25" rows="5" maxlength="100" 
                    value={novaTarefa} onChange={(e) => setNovaTarefa(e.target.value)}>         
                </textarea>
                
                <button onClick={adicionaTarefa}> Adicionar</button>
                
                {listaTarefas.length !== 0 &&
                    <button onClick={limpaTarefas}> Limpar</button>
                }
            
            </div>
        </>
    );

}

export default Lista;