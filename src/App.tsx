import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <>
      <header className="App__header">
        <img src={logo} className="App__header-logo" alt="logo" data-testid="App-logo"/>
      </header>
      <main className="App__container">
        content goes here.
      </main>
    </>
  );
}

export default App;
