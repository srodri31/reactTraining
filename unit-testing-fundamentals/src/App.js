import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { isAnAdult } from './utils/isAnAdult';

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState()

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleAgeChange = (e) => {
    setAge(+e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <label for="input-name">Ingrese su nombre</label>
        <input value={name} onChange={handleNameChange} id="input-name" />
        <label for="input-age">Ingrese su edad</label>
        <input value={age} onChange={handleAgeChange} id="input-age" />
        <div>
          <p>Hola {name}</p>
          <p>{age ? `Su edad es ${age}` : 'Por favor ingrese su edad'}</p>
          <p>{isAnAdult(name, age)}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
