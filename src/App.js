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


      <section> 
      <img className="art-image" src={ process.env.PUBLIC_URL + "/pictures/brushstrokes-pillow.jpg" }></img>
      <img className="art-image" src={ process.env.PUBLIC_URL + "/pictures/brushstrokes.jpg" }></img>
      <img className="art-image" src={ process.env.PUBLIC_URL + "/pictures/brushstrokes-pillows.jpg" }></img>
      </section>

    </div>
    

  );
}

export default App;
