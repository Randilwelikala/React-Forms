import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [username,setUsername] = useState('adc');
  const [password,setPassword] = useState('asd');
  const [email,setEmail] = useState('pqr');
  const [age,setAge] = useState('12');

  const usernameHandler = (event) =>{
    console.log(event.target.value);
    setUsername(event.target.value);
  }

  const passwordHandler = (event) =>{
    console.log(event.target.value);
    setPassword(event.target.value);
  }

  const emailHandler=(event) =>{
    console.log(event.target.value);
    setEmail(event.target.value);
  }

  const ageHandler =(event)=>{
    console.log(event.target.value);
    setAge(event.target.value);
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

          <div>
          <lable>Password: </lable>
          <input type='password' name='password' value={password} onChange={passwordHandler}></input>
          </div>

          <div>
            <lable>Email: </lable>
            <input type='email' name='email' value={email} onChange={emailHandler}></input>
          </div>

          <div>
            <lable>Age: </lable>       
            <input type='number' value={age} onChange={ageHandler} name='age'></input>
            </div>   
        </form>
      </header>
    </div>
  );
}

export default App;
