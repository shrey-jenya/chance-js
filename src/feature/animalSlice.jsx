	import { createSlice } from "@reduxjs/toolkit";
	const animalSlice = createSlice({
		name: "user",
		initialState: [],
		reducers: {
			addAnimal(state, action) {
				state.push(action.payload);
			},
			deleteAnimal(state, action) {
				state.splice(action.payload, 1);
			},
			deleteAll(state, action) {
				return [];
			},
			editAnimal(state, action) {
				const { id, updates } = action.payload;
				state[id] = { ...state[id], ...updates };
			},
			togglePin(state, action) {
				const animal = state.find(animal => animal.id === action.payload);
				if (animal) {
					animal.isPinned = !animal.isPinned;
				}
			},
		}
	})
	export const { addAnimal, deleteAnimal, deleteAll, editAnimal, togglePin } =
		animalSlice.actions;
	export default animalSlice.reducer;
