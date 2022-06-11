import React, { useState } from 'react';
import "./styles.css"

const Enviar = () =>{

    const [resultado, setResultado] = useState(0);

    const calculo = () =>{
        let n1;
        let n2;
        let result;

        n1 = document.querySelector(".campo1").value
        n2 = document.querySelector(".campo2").value

        result = (parseInt(n1) + parseInt(n2))*(parseInt(n1) + parseInt(n2));
        return result;
        
    }

    return(
    <>
        <form action="" className="form">
            <input type="text" name="" className="campo1" id="" />
            <br/>
            <input type="text" name="" className="campo2" id="" />
            <br/>
            <input type="button" value="Calcular" className="btn_login" onClick={() => setResultado(calculo())} />
            <p>Resultado {resultado} </p>
        </form>
    </>
    );
}

export default Enviar;