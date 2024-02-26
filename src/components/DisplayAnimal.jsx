import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAnimal, editAnimal, togglePin } from "../feature/animalSlice";

const DisplayAnimal = () => {
	const [newName, setNewName] = useState("");

	const dispatch = useDispatch();
	const data = useSelector((state) => {
		return state.animal;
	});
	const deleteAnimals = (id) => {
		dispatch(deleteAnimal(id));
	};
	const updateAnimal = (id, newName) => {
		dispatch(editAnimal({ id, name: newName }));
	};
	const pinHandler = (id) => {
		dispatch(togglePin(id));
		console.log("pinned");
	};
	const pinnedAnimals = data.filter((animal) => animal.isPinned);
	const unPinnedAnimals = data.filter((animal) => !animal.isPinned);
	return (
		<div>
			{/* ! Display Pinned Animals */}
			{pinnedAnimals.map((animal, id) => (
				<div className="list">
					<button
						onClick={() => {
							const updatedName = prompt("Update animal", animal);
							if (updatedName !== null) {
								updateAnimal(id, updatedName);
							}
						}}
						title="update name"
					>
						✍🏻
					</button>
					<li key={id}>{animal}</li>
					<button
						title="remove animal"
						onClick={() => deleteAnimals(id)}
					>
						✖
					</button>
					<button onClick={() => pinHandler(id)} title="unpin the item">
						📌
					</button>
				</div>
			))}
			{unPinnedAnimals.map((animal, id) => (
				<div className="list">
					<button
						onClick={() => {
							const updatedName = prompt("Update animal", animal);
							if (updatedName !== null) {
								updateAnimal(id, updatedName);
							}
						}}
						title="update name"
					>
						✍🏻
					</button>
					<li key={id}>{animal}</li>
					<button
						title="remove animal"
						onClick={() => deleteAnimals(id)}
					>
						✖
					</button>
					<button onClick={() => pinHandler(id)} title="pin the item">
					{animal.isPinned ? "📌" : "📍"}
					</button>
				</div>
			))}
		</div>
	);
};

export default DisplayAnimal;
