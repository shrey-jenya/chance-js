import React from "react";
import { useDispatch } from "react-redux";
import { animalData } from "../api/Animal";
import { addAnimal, deleteAll } from "../feature/animalSlice";
import DisplayAnimal from "./DisplayAnimal";
const AnimalDetails = () => {
	const dispatch = useDispatch();
	const animalHandler = (name) => {
		dispatch(addAnimal(name));
	};
	const deleteAllAnimal = () => {
		if (window.confirm("Are you sure you want to delete all")) {
			dispatch(deleteAll());
            alert('item deleted successfully')
		}else{
            alert('item not deleted successfully')
        }
	};
	return (
		<>
			<div className="animalList  ">
				<button
					className="button-85"
					onClick={() => animalHandler(animalData())}
				>
					Add Animal
				</button>
				<button title="clear all list" className="button-85" onClick={() => deleteAllAnimal()}>
					Delete All
				</button>
			</div>
			<DisplayAnimal />
		</>
	);
};
export default AnimalDetails;
