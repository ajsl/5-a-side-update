import React, { Component } from "react";

class Player extends Component {
	constructor(props){
		super(props);

		this.onDelete = this.onDelete.bind(this);

	}

	onDelete() {
		const id = this.props.id;

		this.props.onClick(id)
	}

	// render the  player card with button to delete. 
	render () {

		const { names, btn, displaySkill } = this.props;



		return (

			<React.Fragment>

				<aside className="player-card card-1 card-2 card-3"> 
					<div className="player-card-text">
						<h4>{names.name}</h4>
						{ displaySkill ? <h4>Skill: {names.skill}</h4> : "" }
					</div>	
					{ btn ? <button className="btn-delete" onClick={ this.onDelete } ><div className="btn-delete-text"><p>x</p></div></button> : ""}
				</aside>

			</React.Fragment> 


		);
	}
}

export default Player;