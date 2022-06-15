import React, { useState } from 'react';
import {Link, useLocation} from 'react-router-dom'
import './styles.css'


const Cadastro = () =>{

    const location = useLocation();

    const[nome, setNome] = useState("");
    const[idade, setIdade] = useState("");
    const[sexo, setSexo] = useState("");
    const[cidade, setCidade] = useState("");

    const handleClick = () =>{
        const dados = `\n Nome: ${nome}\n Idade: ${idade}\n Sexo: ${sexo}\n Cidade: ${cidade}`;
        console.log(dados);

        setNome("");
        setIdade("");
        setSexo("");
        setCidade("");

        alert("Cadastro concluído");
    }


    return(
        
        <div>
            <h1>{location.state}</h1>
            <Link to={"/"} state={"Você veio da página de cadastro"}>Home</Link>
            <form action="">
                <label className="Login_nome">
                    Nome: 
                        <input type="text" placeholder="Digite seu nome" value={nome} 
                        onChange={(e) => {setNome(e.target.value)}}/>
                </label>
                <label className="Login_idade">
                    Idade: 
                        <input type="text" placeholder="Digite sua idade" value={idade} 
                        onChange={(e) => {setIdade(e.target.value)}}/>
                </label>
                <label className="Login_sexo">
                    Sexo: 
                        <input type="text" placeholder="Digite seu sexo" value={sexo} 
                        onChange={(e) => {setSexo(e.target.value)}}/>
                </label>
                <label className="Login_cidade">
                    Cidade: 
                        <input type="text" placeholder="Digite sua cidade" value={cidade} 
                        onChange={(e) => {setCidade(e.target.value)}}/>
                </label>

                <input type="button" value="Enviar" onClick={handleClick} className='btn_enviar' />
            </form>
        </div>
    );
}

export default Cadastro;