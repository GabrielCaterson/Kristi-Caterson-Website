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
			<section className="crop-1-box">
                <img className={ "art-image " + this.props.crop + " " + this.props.animation }
                    src={ process.env.PUBLIC_URL + "/pictures/" + this.props.image }></img>
            </section>
		);
	}
}

export default ThirdImage;