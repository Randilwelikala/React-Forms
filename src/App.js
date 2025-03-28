import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [username,setUsername] = useState('adc');
  const [password,setPassword] = useState('asd');
  const [email,setEmail] = useState('test@.com');
  const [age,setAge] = useState(20);
  const [gender,setGender] = useState('');
  const [countr,setCountry] = useState('')


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

  const genderHandler =(event)=>{
    console.log(event.target.value);
    setGender(event.target.value);
  }

  const countryHandler =(event)=>{
    console.log(event.target.value);
    setGender(event.target.value);
  }




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <div>
            <label>UserName: </label>
            <input type='text' value={username} onChange={usernameHandler} name='username'/>
          </div>

          <div>
          <label>Password: </label>
          <input type='password' name='password' value={password} onChange={passwordHandler}></input>
          </div>

          <div>
            <label>Email: </label>
            <input type='email' name='email' value={email} onChange={emailHandler}></input>
          </div>

          <div>
            <label>Age: </label>       
            <input type='number' value={age} onChange={ageHandler} name='age'></input>
          </div>   

          <div>
              <label>Gender</label>
              <label><input type='radio' name='gender' checked={gender === 'male'} value='male' onChange={genderHandler}/>Male</label>
              <label><input type='radio' name='gender' checked={gender === 'female'} value='female' onChange={genderHandler}/>Female</label>
              
          </div>

          <div>
            <label>Country: </label>
            <select name='country' value ='country' onChange={countryHandler}>
              <option value=''>Select your country</option>
              <option value='usa'>USA</option>
              <option value='canada'>Canada</option>
              <option value='uk'>UK</option>
              <option value='australia'>Australia</option>
              <option value='srilanka'>Sri Lanka</option>            
            </select>
          </div>

          <div>
            <label>Hobbies: </label>
            <br/>
            <label><input type='checkbox' name='hobbies' value='reading' ></input>Reading</label>
            <label><input type='checkbox' name='hobbies' value='traveling' ></input>Travelling</label>
            <label><input type='checkbox' name='hobbies' value='gaming' ></input>Gaming</label>
            <label><input type='checkbox' name='hiking' value='hiking' ></input>Hiking</label>



          </div>

            
        </form>
      </header>
    </div>
  );
}

export default App;
