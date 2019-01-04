import React, { Component } from "react";
import ExpensesList from "./Expenses/ExpensesList";
import ExpensesFilterInputs from "./ExpensesFilterInputs/ExpensesFilterInputs";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./dashboard.css";
import getVisibleExpenses from "../../redux/selectors/filteredExpenses";
import DeleteModal from "./Modal/DeleteModal";

class DashBoard extends Component {
	constructor() {
		super();
		this.state = {
			modalSwitch: false,
			exepenseId: undefined
		};
	}

	switchHandle = () => {
		this.setState(prev => ({ modalSwitch: !prev.modalSwitch }));
	};
	setId = id => {
		this.setState({ expenseId: id });
	};
	render() {
		const total = this.props.expenses.reduce((acc, expense) => {
			return acc + expense.amount;
		}, 0);

		return (
			<div>
				<div className="notification-container">
					<h3 className="notification">
						{" "}
						Viewing {this.props.expenses.length} expenses totalling
						${total.toLocaleString("en")}
					</h3>
					<Link to="/createExpense">
						<button className="add-btn shadow-2">
							{" "}
							Add Expense{" "}
						</button>
					</Link>
				</div>
				<ExpensesFilterInputs />
				<ExpensesList
					setId={this.setId}
					switchHandle={this.switchHandle}
				/>
				<DeleteModal
					id={this.state.expenseId}
					switchHandle={this.switchHandle}
					modalSwitch={this.state.modalSwitch}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(DashBoard);
