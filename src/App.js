import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [username,setUsername] = useState('adc');
  const [password,setPassword] = useState('asd')

  const usernameHandler = (event) =>{
    console.log(event.target.value);
    setUsername(event.target.value);
  }

  const passwordHandler = (event) =>{
    console.log(event.target.value);
    setPassword(event.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <div>
            <lable>UserName: </lable>
            <input type='text' value={username} onChange={usernameHandler} name='username'/>
          </div>
          <lable>Password: </lable>
          <input type='password' name='password' value={password} onChange={passwordHandler}></input>
        </form>
      </header>
    </div>
  );
}

export default App;
