import { Link } from "react-router-dom";

const Exercicios = () =>{    
    return(
        <>
            <h1>Lista de Exercícios</h1>
            <Link to={"/"}>Home</Link>
            <br />
            <Link to={"exibir/cadastro"} state={"Cadastro"}>Cadastro</Link>
            <br />
            <Link to={"exibir/calculadora"} state={"Calculadora"}>Calculadora</Link>
            <br />
            <Link to={"exibir/tarefas"} state={"Tarefas"}>Lista de Tarefas</Link>
        </>
    );


}

export default Exercicios;