import React from "react";
import { useDispatch } from "react-redux";
import { playerSlice } from "../Data/createSlice";
import { IPlayer } from "../Models/player";

const Player: React.FC<{displaySkill?: boolean, names: IPlayer }> = ({displaySkill, names}) => {

	const dispatch = useDispatch();

	const onDelete = () => {
		dispatch(playerSlice.actions.removePlayer(names))
	}

	return (

		<React.Fragment>

			<aside className="player-card card-1 card-2 card-3">
				<div className="player-card-text">
					<h4>{names.name}</h4>
					{displaySkill ? <h4>Skill: {names.skill}</h4> : ""}
				</div>
				<button className="btn-delete" onClick={onDelete} ><div className="btn-delete-text"><p>x</p></div></button>
			</aside>

		</React.Fragment>


	);
}


export default Player;