import React, { Component } from "react";
import Player from "./Player";
import { Link } from "react-router-dom";
import { shuffle } from "../Data/dataFunctions";





class Skill extends Component {
	constructor(props){
		super(props);

		 
		this.state = {
			//initial values for the team input fields.
			value1: "",
			value2: "", 
			//boolean flags for the display of team input fields
			displayTeam1: true,
			displayTeam2: true,
			displaySkill: false,
			//store the shuffled array of names in local state, 
			//needs to be shuffeld incase all players have the same skill level
			names: shuffle(this.props.names.sort((a, b) => parseFloat(a.skill) - parseFloat(b.skill))),
			
		}
		this.handleChange1 = this.handleChange1.bind(this);
		this.handleChange2 = this.handleChange2.bind(this);
		this.handleSubmit1 = this.handleSubmit1.bind(this);
		this.handleSubmit2 = this.handleSubmit2.bind(this);
		this.clicked2 = this.clicked2.bind(this);
		this.clicked1 = this.clicked1.bind(this);
		this.skillClicked = this.skillClicked.bind(this);
	}

	// team name onchange handlers 

	handleChange1(e) {
	 	this.setState(({
	 		value1: e.target.value,
	 	}))
	 	
	}
	handleChange2(e) {
	 	this.setState(({
	 		value2: e.target.value,
	 	}))
	 	
	}
	//team name onSubmit handlers 	
	handleSubmit1(e) {
		e.preventDefault();
		this.setState(({
			displayTeam1: false,
		}))

	}

	handleSubmit2(e) {
		e.preventDefault();
		this.setState(({
			displayTeam2: false,
		}))
	}

	//team name edit button event handlers. 
	clicked1(e) {
		e.preventDefault();
		this.setState(({
			displayTeam1: true,
		}))

	}
	clicked2(e) {
		e.preventDefault();
		this.setState(({
			displayTeam2: true,
		}))

	}

	skillClicked() {
		this.setState(({
			displaySkill: this.state.displaySkill ? false : true
		}))
	}
	
	render() {
	
		const { displayTeam1, displayTeam2, names, value1, value2, displaySkill } = this.state;

		const names1 = names.filter(name => name.id % 2 === 0)
		const names2 = names.filter(name => name.id % 2 !== 0)

		let reserve = {};
		
		if (names1.length > names2.length ) {
			reserve = names1.pop();
		}else if(names2.length > names1.length) {
			reserve = names2.pop();
		}
		
		return (
			
			<React.Fragment>
		{ /* if there are team names give thr option to show the skill level */ }
				{ names.length > 1 
				? 
					<div className="skill-btn-container">
						<input type="checkbox" onClick={this.skillClicked}/>
						<label>Show player skill</label>
					</div>
				:
				""	
				}
				
				
		{/*if there are no players in the array display an error and provie a to the home page. */}
				{ names.length < 1 
				? 
					<div className="no-player"><h1>No players found</h1><Link to="/"><h2>Click here to add players</h2></Link></div>
				:
				null
				}	
				<section className="team-list">


					<div className="team-card team1">
				{ /* display the team input feild and an edit button once it's set*/ }
						{ displayTeam1 
							? 
							names.length 
							? 
								<form onSubmit={ this.handleSubmit1 } className="team-input1">
									<input className="name-input team-input"  placeholder="Enter Team Name" type="text" value={ value1 } id="team1" onChange={this.handleChange1} />
									<input className="submit-btn btn team-btn" type="submit"/>
								</form>
							:
								null
							 
						:

						<div className="team-edit-container">
							<h3>{ value1 }</h3>
							<button className="btn edit-btn" onClick={ this.clicked1 }>edit</button>
						</div>	
						} 

						{ names1.map((name, i ) => <div key={ name.id }  ><Player displaySkill={ displaySkill } id={ name.id } names={ name } /></div>)}

					</div>

					{ reserve.id ?
					<div className="team-card reserve">
						<h4 className="team-title">Reserve</h4>
						 <Player displaySkill={ displaySkill } id={ reserve.id } names={ reserve }/> 
					</div>
					: <div></div>}


					<div className="team-card team2"> 
						{ /* display the team input feild and an edit button once it's set*/ }
						{ displayTeam2 
							? 
							names.length 
							? 
								<form onSubmit={this.handleSubmit2} className="team-input1">
									<input className="name-input team-input" placeholder="Enter Team Name" type="text" value={ value2 } id="team2" onChange={this.handleChange2} />
									<input className="submit-btn btn team-btn" type="submit"/>
								</form>
							:
								null
							 
						:
							<div className="team-edit-container">
								<h3>{value2}</h3>
								<button className="btn edit-btn" onClick={ this.clicked2 }>edit</button> 
							</div>
						} 

						{ names2.map((name, i) => <div key={ name.id } ><Player displaySkill={ displaySkill } id={ name.id } names={ name } 
							/></div>)}
						

					</div> 
				</section>	
			</React.Fragment>

		);

	}
}

export default Skill;