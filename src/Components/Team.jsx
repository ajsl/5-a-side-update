import React, { Component } from "react";
import Player from "./Player";
import { Link } from "react-router-dom";

// function to shuffle the array. 
const shuffle = (array => {
	let length = array.length, temp, index;

	while (length > 0) {
		index = Math.floor(Math.random() * length);

		length -= 1;

		temp = array[length];
		array[length] = array[index];
		array[index] = temp 
	}

	return array;
}) 

//function to get the halfway point of an array
const midPoint = (array => Math.ceil(array.length / 2));



class Team extends Component {
	constructor(props){
		super(props);

		//store the shuffled array of names in state. 
		this.state = {
			names: shuffle(this.props.names),
			
		}
	}
	
	

	
	render() {
console.log(this.state.names)
		//console.log(this.state.names)
		//set up empty arrays 
		let names1 = [];
		let names2 = [];
		
		if(this.state.sort !== true){
			//split the names array into 2 separate arrays one with odd id's and the other even
			names1 = (this.state.names.sort((a, b) => parseFloat(a.skill) - parseFloat(b.skill))).filter((name, i ) => i % 2 === 0 );
			names2 = (this.state.names.sort((a, b) => parseFloat(a.skill) - parseFloat(b.skill))).filter((name, i ) => i % 2 !== 0 );
		}else{
			//split the array into 2 using the midpoint as a reference
			names1 = this.state.names.filter((name, i ) => i % 2 === 0 );
			names2 = this.state.names.filter((name, i ) => i % 2 !== 0 );
			
		}

		let reserve = {};
		if (names1.length > names2.length ) {
			reserve = names1.pop();
		}else if(names2.length > names1.length) {
			reserve = names2.pop();
		}

		console.log(names1)
		console.log(names2)

		

		return (

			<React.Fragment>

				{ this.state.names.length > 0 ? "": <div className="no-player"><h1>No players found</h1><Link to="/"><h2>Click here to add players</h2></Link></div>}
				<section className="team-list">

						<div className="team-card team1">

							<h4 className ="team-title">Team 1</h4>

							{ names1.map((name, i ) => <div key={ name.id }><Player id={ name.id } names={ name } /></div>)}

						</div>

						{ reserve.id ?

						<div className="team-card">
							<h4 className="team-title">Reserve</h4>
							 <Player id={ reserve.id } names={ reserve }/> 
						</div>
						: <div></div>}



						<div className="team-card team2"> 

							<h4 className ="team-title">Team 2</h4>

							{ names2.map((names, i) => <div key={ names.id } ><Player id={ names.id } names={ names }  /></div>)}
							

						</div>

				</section>	
			</React.Fragment>
				
				

		);

	}
}

export default Team;