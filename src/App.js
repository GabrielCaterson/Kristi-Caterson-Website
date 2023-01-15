import logo from './logo.svg';
import './App.css';

import { ThirdImage } from './Components/ThirdImage.js';


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img className="logo-image" 
					src={ process.env.PUBLIC_URL + "/pictures/KristiCaterson.png" }></img>

				<section className="header-outside">
					<p className="header-inside">
						Inspired Design for Gracious Living
					</p>
				</section>

			</header>

			<img className="logo-image" 
				src={ process.env.PUBLIC_URL + "/pictures/hand.png" }></img>


			<section className="three-panel">
				<ThirdImage image="Kristi blue 1.jpg" crop=""/>
				<ThirdImage image="Kristi blue 3.jpg" crop="crop-2-image" animationFrame="droplet-2"/>
				<ThirdImage image="Kristi blue 2.jpg" crop=""/>
			</section>

			<section className="three-panel"> 
				<ThirdImage image="Kristi blue 5.jpg" crop=""/>
				<ThirdImage image="Kristi blue 4.jpg" crop="crop-2-image"/>
				<ThirdImage image="Kristi blue 7.jpg" crop=""/>
			</section>



			<section className="three-panel short-panel">
				<ThirdImage image="Love 1.jpg" crop=""/>
				<ThirdImage image="Love 2.jpg" crop=""/>
				<ThirdImage image="Love 3.jpg" crop=""/>
			</section>



			<section className="three-panel"> 
				<ThirdImage image="brushstrokes-pillow.jpg" 	crop=""/>
				<ThirdImage image="brushstrokes.jpg" 			crop="" animationFrame="droplet"/>
				<ThirdImage image="brushstrokes-pillows.jpg" 	crop=""/>
			</section>

			<section className="three-panel">
				<ThirdImage image="Be 1.jpg" crop=""/>
				<ThirdImage image="Be 2.png" crop=""/>
				<ThirdImage image="Be 3.jpg" crop="crop-2-image" animationImage="wobble"/>
			</section>



			<section className="three-panel short-panel">
				<ThirdImage image="green pillow 1.jpg" crop=""/>
				<ThirdImage image="green pillow 2.jpg" crop=""/>
				<ThirdImage image="green pillow 3.jpg" crop=""/>
			</section>

			<section className="three-panel short-panel">
				<ThirdImage image="green banner 1.jpg" crop="crop-4-image"/>
				<ThirdImage image="green banner 2.jpg" crop="crop-4-image"/>
				<ThirdImage image="green banner 3.jpg" crop="crop-4-image"/>
			</section>

			<section className="three-panel short-panel">
				<ThirdImage image="green banner 4.jpg" crop="crop-4-image"/>
				<ThirdImage image="green banner 5.jpg" crop="crop-4-image"/>
				<ThirdImage image="green banner 6.jpg" crop="crop-4-image"/>
			</section>


			<section className="three-panel">
				<ThirdImage image="tears.jpg" crop=""/>
				<ThirdImage image="circle 2.jpg" crop="" animationImage="spin"/>
				<ThirdImage image="panels.jpg" crop="crop-2-image" animationFrame="droplet-3"/>
			</section>

			<section className="three-panel">
				<ThirdImage image="circle 1.jpg" crop="" animationImage="wobble"/>
				<ThirdImage image="heart.jpg" crop=""/>
				<ThirdImage image="worship.jpg" crop=""/>
			</section>

			<section className="three-panel">
				<ThirdImage image="love heart.jpg" crop=""/>
				<ThirdImage image="truth.jpg" crop="crop-3-image" animationImage="white-shadow"/>
				<ThirdImage image="circle 3.jpg" crop=""/>

			</section>


			<section className="three-panel">
				<ThirdImage image="start.jpg" crop="" />
				<ThirdImage image="transparent.png" crop="" overflow="no-crop" animationImage="flip-bulb"/>
				<ThirdImage image="conquerer.jpg" crop=""/>
			</section>


			<div className="test-box-thing test-box-1"></div>
			<div className="test-box-thing test-box-2"></div>
			<div className="test-box-thing test-box-3"></div>
			<div className="test-box-thing test-box-4"></div>
			<div className="test-box-thing test-box-5"></div>

		</div>
		

	);
}

export default App;
