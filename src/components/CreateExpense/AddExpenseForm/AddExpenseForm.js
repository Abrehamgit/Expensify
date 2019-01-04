import React, { Component } from "react";
import "react-dates/initialize";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./addExpense.css";
import { input } from "mdbreact";
import { Fa } from "mdbreact";
import { Link } from "react-router-dom";

class AddExpenseForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			description: props.expense ? props.expense.description : "",
			amount: props.expense ? props.expense.amount : "",
			note: props.expense ? props.expense.note : "",
			createdAt: props.expense
				? moment(props.expense.createdAt)
				: moment(),
			calendarFoucued: false,
			errorMes: ""
		};
	}

	desHandler = e => {
		const description = e.target.value;
		this.setState({ description });
	};

	amountHandler = e => {
		const amount = e.target.value;
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState({ amount });
		}
	};

	noteHandler = e => {
		const note = e.target.value;
		this.setState({ note });
	};
	dateHandler = createdAt => {
		if (createdAt) {
			this.setState({ createdAt });
		}
	};
	focusHandler = ({ focused }) => {
		this.setState({ calendarFoucued: focused });
	};

	onSubmit = e => {
		e.preventDefault();
		if (!this.state.description || !this.state.amount) {
			this.setState({
				errorMes: "Please provide both description and amount"
			});
		} else {
			this.setState({ errorMes: "" });
			this.props.onSubmit({
				description: this.state.description,
				note: this.state.note,
				createdAt: this.state.createdAt.valueOf(),
				amount: parseFloat(this.state.amount)
			});
		}
	};

	render() {
		return (
			<div>
				<div className="notification-container">
					<h3 className="notification">Add Expense</h3>
					<Link to="/">
						<button className="add-btn shadow-2">
							{" "}
							Back to Dashboard{" "}
						</button>
					</Link>
				</div>
				{this.state.errorMes && (
					<p className="error-message"> {this.state.errorMes} </p>
				)}
				<form onSubmit={this.onSubmit} className="inputs-container">
					<div className="input-item">
						<input
							type="text"
							placeholder="Description"
							value={this.state.description}
							onChange={this.desHandler}
							autoFocus
							className="form-description"
						/>
					</div>
					<div className="input-item">
						<input
							type="text"
							placeholder="Amount"
							value={this.state.amount}
							onChange={this.amountHandler}
							className="form-amount"
						/>
					</div>
					<div className="input-item">
						<textarea
							placeholder="add anote for your expense(optional)"
							value={this.state.note}
							onChange={this.noteHandler}
							className="form-amount"
						/>
					</div>
					<div className="input-item">
						<SingleDatePicker
							date={this.state.createdAt}
							onDateChange={this.dateHandler}
							focused={this.state.calendarFoucued}
							onFocusChange={this.focusHandler}
							numberOfMonths={1}
							isOutsideRange={() => false}
						/>
					</div>

					<button className="form-btn"> {this.props.method} </button>
				</form>
			</div>
		);
	}
}

export default AddExpenseForm;
