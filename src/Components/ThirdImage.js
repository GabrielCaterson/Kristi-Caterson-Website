import React, { Component, useRef } from "react";
//import {Helmet} from "react-helmet";
import useIntersection from './useIntersection.js';


let sound = new Audio("/sounds/0m-060-C4.wav");



export class ThirdImage extends Component {
	constructor(props) {
		super(props);

		this.state = {
        }
	}

    /*const ref = useRef();
    const inViewport = useIntersection(ref, '0px');

    if(inViewport) {
        console.log('in viewport:', ref.current);
    }*/

    /*componentDidMount() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const square = entry.target.querySelector('.wipe-enter');
            
                if (entry.isIntersecting) {
                    square.classList.add('wipe-enter-activator');
                    return; 
                }
            
                square.classList.remove('wipe-enter-activator');
            });
        });
        
        observer.observe(document.querySelector('.crop-1-box'));
    }*/
    
	render() {

        return (
			<section className={ "crop-1-box" + " " + this.props.animationFrame + " " + this.props.overflow } >
                <img className={ "art-image " + this.props.crop + " " + this.props.animationImage }
                    src={ process.env.PUBLIC_URL + "/pictures/" + this.props.image }></img>

                { /*this.entranceAnimation */}
            </section>
		);
	}
}

export default ThirdImage;