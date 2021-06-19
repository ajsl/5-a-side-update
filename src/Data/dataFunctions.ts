import { IPlayer } from "../Models/player";

export const validate = (value: any) => {
	if (value.length < 1 || value.length > 30 || value === " " ){
		return false
	}else{
		return true
	}

};	

//check the name is unique - 2 arguments the first it the current value the second is the array in state. 
export const repeat = (input: any, array: IPlayer[]) => 
	{
		
		if (array){
			return !array.some(obj => obj.name === input)
		}
		return true;
			
	

	}

	//input !== array.forEach(obj => obj.name || array === []));

// function to shuffle the array. 
export const shuffle = (array: any[]) => {
	let length = array.length, temp, index;

	while (length > 0) {
		index = Math.floor(Math.random() * length);

		length -= 1;

		temp = array[length];
		array[length] = array[index];
		array[index] = temp 
	}

	return array;
};

//function to get the halfway point of an array
export  const midPoint = (array: any[]) => Math.ceil(array.length / 2);

