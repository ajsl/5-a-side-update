import React from "react";
//import image from "../assets/images/referee.png";
import { Link } from "react-router-dom";	


const FourOhFour = () => (
	
	<React.Fragment>
		<div className="four-container">
			<div className="error-not-found">
				<h1>Page not found</h1>

				<Link to="/" ><h3>Home Page</h3></Link>
			</div>	
			{ /*<img className="ref-image" src={image} alt="referee" />*/ }
		</div>	
	</React.Fragment>	
);

export default FourOhFour;