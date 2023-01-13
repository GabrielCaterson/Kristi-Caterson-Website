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

      <section className="art-image crop-1-box"><img className="art-image" 
              src={ process.env.PUBLIC_URL + "/pictures/Kristi blue 1.jpg" }></img></section>

      <section className="three-panel"> 
      
        <img className="art-image" 
              src={ process.env.PUBLIC_URL + "/pictures/Kristi blue 1.jpg" }></img>
        <section className="art-image crop-1-box">
          <img className="art-image crop-1-image" 
              src={ process.env.PUBLIC_URL + "/pictures/Kristi blue 3.jpg" }></img>
        </section>
        <img className="art-image" 
              src={ process.env.PUBLIC_URL + "/pictures/Kristi blue 2.jpg" }></img>
      </section>

      <section className="three-panel"> 
        <img className="art-image" 
              src={ process.env.PUBLIC_URL + "/pictures/Kristi blue 5.jpg" }></img>
        <img className="art-image" 
              src={ process.env.PUBLIC_URL + "/pictures/Kristi blue 4.jpg" }></img>
        <img className="art-image" 
              src={ process.env.PUBLIC_URL + "/pictures/Kristi blue 7.jpg" }></img>
      </section>

      <section className="three-panel"> 
        <img className="art-image" 
              src={ process.env.PUBLIC_URL + "/pictures/brushstrokes-pillow.jpg" }></img>
        <img className="art-image" 
              src={ process.env.PUBLIC_URL + "/pictures/brushstrokes.jpg" }></img>
        <img className="art-image" 
              src={ process.env.PUBLIC_URL + "/pictures/brushstrokes-pillows.jpg" }></img>
      </section>

    </div>
    

  );
}

export default App;
