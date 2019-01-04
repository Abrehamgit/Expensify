import uuid from "uuid";

////////ACTIONS///////////////
//add expense

export const addExpense = ({
	description = "",
	note = "",
	amount = 0,
	createdAt = undefined
} = {}) => ({
	type: "ADD_EXPENSE",
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});
//edit expense
export const editExpense = (id, updates) => ({
	type: "EDIT_EXPENSE",
	id,
	updates
});
//remove expense
export const removeExpense = ({ id }) => ({
	type: "REMOVE_EXPENSE",
	id
});
