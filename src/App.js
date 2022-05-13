import './App.css';
import ReloadButton from './components/Button/ReloadButton';
import Dogs from './components/Dogs';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <div className="App">
      <div className="container">
        <HeaderComponent />
        <main>
          <div className='cards-list'>
            <Dogs />
            <Dogs />
          </div>
          <ReloadButton/>
        </main>
      </div>
    </div>
  );
}

export default App;
