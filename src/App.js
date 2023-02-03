import React, { useRef } from 'react';
import useIntersection from './Components/useIntersection.js'
import logo from './logo.svg';
import './App.css';


import { ThirdImage } from './Components/ThirdImage.js';


function App() {
	/*
	const ref = useRef();
    //const inViewport = useIntersection(ref, '0px');
    const inViewport = useIntersection(ref, '-200px');

    if (inViewport) {
        console.log('in viewport:', ref.current);
    }*/

	/*const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
		  	const square = entry.target.querySelector('.wipe-enter');
	  
			if (entry.isIntersecting) {
				square.classList.add('wipe-enter-activator');
				return; // if we added the class, exit the function
			}
	  
			// We're not intersecting, so remove the class!
			square.classList.remove('wipe-enter-activator');
		});
	});
	
	observer.observe(document.querySelector('.crop-36-box'));*/
	
	return (
		<section className="App blur-enter">
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
				<ThirdImage image="Kristi blue 1.jpg" crop="" enterAnimation="wipe-enter" />
				<ThirdImage image="Kristi blue 3.jpg" crop="crop-38-image" animationFrame="droplet-2"/>
				<ThirdImage image="Kristi blue 7.jpg" crop=""/>
			</section>

			<section className="three-panel"> 
				<ThirdImage image="Kristi blue 5.jpg" crop=""/>
				<ThirdImage image="Kristi blue 4.jpg" crop="crop-38-image"/>
				<ThirdImage image="Kristi blue 2.jpg" crop="" enterAnimation="wipe-enter"/>
			</section>



			<section className="three-panel short-panel">
				<ThirdImage image="Love 1.jpg" crop=""/>
				<ThirdImage image="Love 2.jpg" crop=""/>
				<ThirdImage image="Love 3.jpg" crop=""/>
			</section>

			<section className="text-box-wrapper"> 
				<section className="text-box">
					<p className="text-title"> About Kristi </p>
					<p className="text-body">
						Kristi Caterson, the principal at LizaBelle Studio LLC, dreams, designs, creates and licenses original artwork to manufacturers, publishers and private clients.
						<br /> <br />
						Kristi has a 22 year professional history of creating art and design for many different applications and would love the opportunity to work with you.
					</p>
				</section>
				<ThirdImage image="home pillows.jpg" crop=""/>

			</section>



			<section className="three-panel"> 
				<ThirdImage image="brushstrokes-pillow.jpg" 	crop=""/>
				<ThirdImage image="brushstrokes.jpg" 			crop="" animationFrame="droplet"/>
				<ThirdImage image="brushstrokes-pillows.jpg" 	crop=""/>
			</section>


			<section className={ "wide-panel" } >
                <img className={ "wide-art-image " }
                    src={ process.env.PUBLIC_URL + "/pictures/" + "Be 4.jpg"}></img>
            </section>

			<section className="three-panel">
				<ThirdImage image="Be 1.jpg" crop=""/>
				<ThirdImage image="Be 2.png" crop=""/>
				<ThirdImage image="Be 3.jpg" crop="crop-38-image" animationImage="wobble"/>
			</section>



			<section className="three-panel short-panel">
				<ThirdImage image="green pillow 1.jpg" crop=""/>
				<ThirdImage image="green pillow 2.jpg" crop=""/>
				<ThirdImage image="green pillow 3.jpg" crop=""/>
			</section>

			
			<section className="text-box-wrapper"> 
				<ThirdImage image="love pink.jpg" animationFrame="droplet-2"/>

				<section className="text-box">
					<p className="text-title"> Mission </p>
					<p className="text-body">

						Kristi's mission is to create great great art and relevant, inspired, joyful design that will increase perceived value, function and design aesthetic of products it is used on. In short, Kristi's mission is to create great art that will help you sell your fabulous product!
					</p>
				</section>

			</section>





			{/*<section className="three-panel">
				<ThirdImage image="green banner 1.jpg" crop="crop-333-image"/>
				<ThirdImage image="green banner 2.jpg" crop="crop-333-image"/>
				<ThirdImage image="green banner 3.jpg" crop="crop-333-image"/>
			</section>

			<section className="three-panel">
				<ThirdImage image="green banner 4.jpg" crop="crop-333-image"/>
				<ThirdImage image="green banner 5.jpg" crop="crop-333-image"/>
				<ThirdImage image="green banner 6.jpg" crop="crop-333-image"/>
			</section>*/}


			<section className="three-panel">
				<ThirdImage image="tears.jpg" crop=""/>
				<ThirdImage image="circle 2.jpg" crop="" animationImage="spin"/>
				<ThirdImage image="panels.jpg" crop="crop-38-image" animationFrame="droplet-3"/>
			</section>

			<section className="three-panel">
				<ThirdImage image="circle 1.jpg" crop="" animationImage="wobble"/>
				<ThirdImage image="heart.jpg" crop=""/>
				<ThirdImage image="worship.jpg" crop=""/>
			</section>

			<section className="three-panel">
				<ThirdImage image="love heart.jpg" crop=""/>
				<ThirdImage image="truth.png" crop="crop-30-image"/>
				<ThirdImage image="circle 3.jpg" crop=""/>

			</section>


			<section className="three-panel">
				<ThirdImage image="start.jpg" crop="" />
				<ThirdImage image="transparent.png" crop="" overflow="no-crop" animationImage="flip-bulb"/>
				<ThirdImage image="conquerer.jpg" crop=""/>
			</section>

			<section className="text-box-wrapper"> 
				<section className="text-box">
					<p className="text-title"> Skills and Education </p>
					<p className="text-body">
						Kristi Caterson, the principal at LizaBelle Studio LLC has a BFA with a concentration in Woodworking and Furniture Design from The University of The Arts in Philadelphia, PA.  Kristi specializes in Art, design, art for licensing, product design, hand lettering, painting, drawing, photoshop, branding and logo design, custom artwork, murals, furniture design, interior design and more.
					</p>
				</section>

				<ThirdImage image="hello love.jpg" animationFrame="droplet-2"/>


			</section>

			<section className="ocean-container">
				<section className="ocean">
					<section className="wave"></section>
					<section className="wave"></section>
				</section>
				<section className="below-ocean-panel"></section>

			</section>

			<section className="three-panel below-ocean-panel">
				<ThirdImage image="blue anchors.jpg" animationImage="wobble wobble-duration-2" crop="crop-36-image"/>
				<ThirdImage image="sail away.jpg"/>
				<ThirdImage image="blue shells.jpg"/>
			</section>

			<section className="three-panel">
				<ThirdImage image="mermaids.jpg"/>
				<ThirdImage image="pink anchor.jpg"/>
				<ThirdImage image="smooth sea.jpg" animationImage="wobble" crop="crop-36-image"/>
			</section>

			<section className="three-panel">
				<ThirdImage image="baby blue shells.jpg" enterAnimation="wipe-enter"/>
				<ThirdImage image="hope anchor.jpg"/>
				<ThirdImage image="diamond anchor.jpg" />
			</section>



			<section className="socials-container">

				<a  className="socials" 
					href="https://www.facebook.com/kristi.inspiredesign/" 
					target="_blank" rel="noopener noreferrer">
					<section className="socials-image Facebook"></section>
				</a>

				<a  className="socials" 
					href="https://www.linkedin.com/in/kristicaterson" 
					target="_blank" rel="noopener noreferrer">
					<section className="socials-image LinkedIn"></section>
				</a>

				<a  className="socials" 
					href="mailto:kristi@kristicaterson.com" 
					target="_blank" rel="noopener noreferrer">
					<section className="socials-image Email"></section>
				</a>

				<a  className="socials" 
					href="https://www.pinterest.com/kristileelee/" 
					target="_blank" rel="noopener noreferrer">
					<section className="socials-image Pinterest"></section>
				</a>

				<a  className="socials" 
					href="http://instagram.com/kristicaterson" 
					target="_blank" rel="noopener noreferrer">
					<section className="socials-image Instagram"></section>
				</a>

			</section>

			
		</section>
		

	);
}

export default App;
