import "./styles.css"

const Enviar = () =>{
    const calculo = (e) =>{
        e.preventDefault();
        let n1 = 2;
        let n2 = 2;

        console.log((n1 + n2)*(n1 + n2))
    }

    return(
    <>
        <form action="" className="form">
            <button className="btn_login" type="submit" onClick={calculo}>Calcular</button>
        </form>
    </>
    );
}

export default Enviar;