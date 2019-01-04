import React from "react";
import { connect } from "react-redux";
import { editExpense, removeExpense } from "../../redux/actions/expenses";
import AddExpenseForm from "../CreateExpense/AddExpenseForm/AddExpenseForm";

const EditExpense = props => {
	return (
		<div>
			<AddExpenseForm
				expense={props.expense}
				method="Update"
				onSubmit={expense => {
					props.dispatch(editExpense(props.expense.id, expense));
					props.history.push("/");
				}}
			/>
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	expense: state.expenses.find(expense => {
		return expense.id === props.match.params.id;
	})
});
export default connect(mapStateToProps)(EditExpense);
