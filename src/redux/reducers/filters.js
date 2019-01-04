import moment from "moment";

const filtersDefaultState = {
	text: "",
	sortBy: "",
	startDate: undefined,
	endDate: undefined
	// startDate: moment().startOf("month"),
	// endDate: moment().endOf("month")
};

const filters_reducer = (state = filtersDefaultState, action) => {
	switch (action.type) {
		case "SET_TEXT_FILTER": {
			return { ...state, ...{ text: action.text } };
		}
		case "SORT_BY_DATE": {
			return { ...state, ...{ sortBy: "date" } };
		}
		case "SORT_BY_AMOUNT": {
			return { ...state, ...{ sortBy: "amount" } };
		}
		case "CLEAR_SORT": {
			return { ...state, ...{ sortBy: "" } };
		}
		case "SET_START_DATE": {
			return { ...state, ...{ startDate: action.startDate } };
		}
		case "SET_END_DATE": {
			return { ...state, ...{ endDate: action.endDate } };
		}
		default:
			return state;
	}
};

export default filters_reducer;
