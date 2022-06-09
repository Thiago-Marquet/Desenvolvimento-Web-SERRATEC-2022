import "./styles.css"

const SegundoComponente = () =>{
    const handleLogin = (e) =>{
        e.preventDefault();
        console.log("Login");
    }
    
    return (
        <>
        <form action="" className="form">
                <span className="texto">Login</span><input type="text" />
                <br /><br />
                <span className="texto">Senha</span> <input type="password" name="" id="" />
                <br /><br />
                <button className="btn_login" type="submit" onClick={handleLogin}>Login</button>
        </form>
        </>
        
    );
}

export default SegundoComponente