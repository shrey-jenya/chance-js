import { configureStore } from "@reduxjs/toolkit";
import animalSlice from "../feature/animalSlice";

const store = configureStore({
	reducer: {
		animal: animalSlice,
	},
});
export default store;
