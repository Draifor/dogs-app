import logo from './logo.svg';
import './App.css';
import Dogs from './components/Dogs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Dogs/>
      </header>
    </div>
  );
}

export default App;
