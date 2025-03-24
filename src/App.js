import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [username,setUsername] = useState('adc');

  const usernameHandler = (event) =>{
    console.log(event.Target.value);
    setUsername(event.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <div>
            <lable>UserName:</lable>
            <input type='text' value={username} onChange={usernameHandler} name='username'></input>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
