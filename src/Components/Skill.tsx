import React, { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import Player from "./Player";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IPlayer } from "../Models/player";
import { shuffle } from "../Data/dataFunctions";

const Skill: React.FC = () => {
	
	const props: any = useSelector(state => {
		return state;
	  })

	const [value1, setValue1] = useState("");
	const [value2, setValue2] = useState("");
	const [displayTeam1, setDisplayTeam1] = useState(true);
	const [displayTeam2, setDisplayTeam2] = useState(true);
	const [displaySkill, setDisplaySkill] = useState(false);
	const namesArray = props.names.slice();
	const names: IPlayer[] = namesArray.sort((a: IPlayer, b: IPlayer) => a.skill - b.skill);

	// team name onchange handlers 

	const handleChange1 = (e: ChangeEvent<HTMLInputElement>) => {
		setValue1(e.target.value);
	}
	const handleChange2 = (e: ChangeEvent<HTMLInputElement>) => {
		setValue2(e.target.value);
	 	
	}
	//team name onSubmit handlers 	
	const handleSubmit1 = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setDisplayTeam1(false);

	}

	const handleSubmit2 = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setDisplayTeam2(false);

	}

	//team name edit button event handlers. 
	const clicked1 = (e: MouseEvent) =>  {
		e.preventDefault();
		setDisplayTeam1(true);
	}
	const clicked2 = (e: MouseEvent) =>  {
		e.preventDefault();
		setDisplayTeam2(true);
	}

	const skillClicked = () => {
		setDisplaySkill(!displaySkill)
	}
		//shuffel the players
		const shuffelPlayers = shuffle(names);

		const names1 = shuffelPlayers.slice(0, (Math.ceil((shuffelPlayers.length - 1) / 2)))
		const names2 = shuffelPlayers.slice((Math.ceil((shuffelPlayers.length - 1) / 2) ))

		let reserve: IPlayer | undefined;

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
						<input type="checkbox" onClick={skillClicked}/>
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
								<form onSubmit={(e) => handleSubmit1(e) } className="team-input1">
									<input className="name-input team-input"  placeholder="Enter Team Name" type="text" value={ value1 } id="team1" onChange={(e) => handleChange1(e)} />
									<input className="submit-btn btn team-btn" type="submit"/>
								</form>
							:
								null
							 
						:

						<div className="team-edit-container">
							<h3>{ value1 }</h3>
							<button className="btn edit-btn" onClick={(e) => clicked1(e) }>edit</button>
						</div>	
						} 

						{ names1.map((name ) => <div key={ name.id }  ><Player displaySkill={ displaySkill } names={ name } /></div>)}

					</div>

					{ reserve?.id ?
					<div className="team-card reserve">
						<h4 className="team-title">Reserve</h4>
						 <Player displaySkill={ displaySkill } names={ reserve }/> 
					</div>
					: <div></div>}


					<div className="team-card team2"> 
						{ /* display the team input feild and an edit button once it's set*/ }
						{ displayTeam2 
							? 
							names.length 
							? 
								<form onSubmit={(e) => handleSubmit2(e)} className="team-input1">
									<input className="name-input team-input" placeholder="Enter Team Name" type="text" value={ value2 } id="team2" onChange={(e) => handleChange2(e)} />
									<input className="submit-btn btn team-btn" type="submit"/>
								</form>
							:
								null
							 
						:
							<div className="team-edit-container">
								<h3>{value2}</h3>
								<button className="btn edit-btn" onClick={(e) => clicked2(e) }>edit</button> 
							</div>
						} 

						{ names2.map((name) => <div key={ name.id } ><Player displaySkill={ displaySkill } names={ name } 
							/></div>)}
						

					</div> 
				</section>	
			</React.Fragment>

		);
}

export default Skill;