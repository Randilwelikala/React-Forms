import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <div>
            <lable>UserName:</lable>
            <input type='text' name='username'></input>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
