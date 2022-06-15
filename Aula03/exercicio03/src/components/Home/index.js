import { Link, useLocation } from "react-router-dom";

const Home = () =>{
    return(
        <>
            <h1>Home</h1>
            <Link to={"exercicios"}>Exercícios</Link>
        </>
    );

}

export default Home;