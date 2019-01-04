const expensesDefaultState = [
	{
		description: "bet money",
		amount: 12321323,
		createdAt: 123123123,
		note: "bet bitch bet bet bet mf bet",
		id: 213213
	}
];

const expenses_reducer = (state = expensesDefaultState, action) => {
	switch (action.type) {
		case "ADD_EXPENSE": {
			return [...state, action.expense];
		}
		case "EDIT_EXPENSE": {
			return state.map(
				expense =>
					expense.id === action.id
						? { ...expense, ...action.updates }
						: expense
			);
		}
		case "REMOVE_EXPENSE": {
			return state.filter(expense => expense.id !== action.id);
		}
		default:
			return state;
	}
};

export default expenses_reducer;
