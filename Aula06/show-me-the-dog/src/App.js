import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';

function App() {
  const [dog, setDog] = useState(null)
  console.log(dog);

  const getDog = async () => {
    const { data } = await axios.get('https://api.thedogapi.com/v1/images/search')
    setDog(data)
  }

  useEffect(() => {
    getDog();
  },[])

  return (
    <div className="App">
      <h1>SHOW ME THE DOG</h1>
      { dog && <img src={dog[0].url} alt="Dog" width={200}/> }
      <br />
      <button onClick={getDog}>Dog</button>
    </div>
  );
}

export default App;
