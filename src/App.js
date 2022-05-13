import "./App.css";
import ReloadButton from "./components/Button/ReloadButton";
import Dogs from "./components/Dogs";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <main>
          <div className="cards-list">
            <Dogs />
            <Dogs />
          </div>
          <ReloadButton />
        </main>
      </div>
    </div>
  );
}

export default App;
