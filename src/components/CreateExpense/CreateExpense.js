import React from "react";
import AddExpenseForm from "./AddExpenseForm/AddExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../../redux/actions/expenses";

const CreateExpense = ({ dispatch, history }) => (
	<div>
		<AddExpenseForm
			method="Add expense"
			onSubmit={expense => {
				dispatch(addExpense(expense));
				history.push("/");
			}}
		/>
	</div>
);

export default connect()(CreateExpense);
