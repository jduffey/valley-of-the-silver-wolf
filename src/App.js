import './App.css';
import CircularRing from './components/CircularRing';

function App() {

  const Header = () => {
    return (
      <header>
        <h1>Valley Of The Silver Wolf</h1>
      </header>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <CircularRing />
        <p>
          Town Name
        </p>
      </header>
    </div>
  );
}

export default App;
