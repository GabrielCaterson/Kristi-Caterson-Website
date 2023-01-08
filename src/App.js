import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo-image" src={ process.env.PUBLIC_URL + "/pictures/KristiCaterson.png" }></img>

        <p>
        Inspired Design for Gracious Living
        </p>
        
        

      </header>

      <img className="logo-image" src={ process.env.PUBLIC_URL + "/pictures/hand.png" }></img>
      
    </div>
  );
}

export default App;
