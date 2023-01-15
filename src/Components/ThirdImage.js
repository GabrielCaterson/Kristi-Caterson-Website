import React, { Component } from "react";
//import {Helmet} from "react-helmet";




let sound = new Audio("/sounds/0m-060-C4.wav");

export class ThirdImage extends Component {
	constructor(props) {
		super(props);

		this.state = {
        }
	}

	render() {
        

        return (
			<section className={ "crop-1-box" + " " + this.props.animationFrame + " " + this.props.overflow } >
                <img className={ "art-image " + this.props.crop + " " + this.props.animationImage }
                    src={ process.env.PUBLIC_URL + "/pictures/" + this.props.image }></img>
            </section>
		);
	}
}

export default ThirdImage;