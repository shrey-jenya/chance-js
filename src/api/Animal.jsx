import { Chance } from "chance";

const chance = new Chance();
export const animalData = () => {
	return chance.animal({ type: "zoo" });
};  
