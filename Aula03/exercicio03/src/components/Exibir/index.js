import {Link, useLocation} from 'react-router-dom'
import Cadastro from '../Cadastro';
import Enviar from '../Calculadora';
import Lista from '../List';

const Exibir = () =>{

    const location = useLocation();

    const escolheComponente = () => {

        switch (location.state) {       
            case "Calculadora":
                return <Enviar/>   
            case "Cadastro":
                return <Cadastro/>
            case "Tarefas" :
                return <Lista/>

            default:
                return;
        }
    }

    return (
        {escolheComponente}
    );

}

export default Exibir;