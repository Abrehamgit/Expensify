import React from "react";
import ExpenseItem from "./ExpenseItem";
import { connect } from "react-redux";
import getVisibleExpenses from "../../../redux/selectors/filteredExpenses";
import "./expensesList.css";

const ExpensesList = ({ expenses, switchHandle, setId }) => (
	<div className="main-container">
		<div className="list-header">
			<div>
				<p> Expense </p>
			</div>
			<div className="header-amount">
				<p> Amount </p>
			</div>
			<div className="delete-edit">
				<p> Delete / Edit </p>
			</div>
		</div>
		<div className="expenses-container">
			{expenses.map(expense => {
				return (
					<ExpenseItem
						key={expense.id}
						{...expense}
						switchHandle={switchHandle}
						setId={setId}
					/>
				);
			})}
		</div>
	</div>
);

const mapStateToProps = state => ({
	expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesList);
