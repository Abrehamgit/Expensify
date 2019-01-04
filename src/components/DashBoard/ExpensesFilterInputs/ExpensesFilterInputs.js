import React, { Component } from "react";
import "react-dates/initialize";
import { connect } from "react-redux";
import {
	setTextFilter,
	sortByDate,
	sortByAmount,
	clearSort,
	setStartDate,
	setEndDate
} from "../../../redux/actions/filters";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./expensesFilterInputs.css";
import { input, select, option } from "mdbreact";

class ExpensesFilterInputs extends Component {
	constructor() {
		super();
		this.state = {
			calendarFocused: null
		};
	}

	onDatesChange = ({ startDate, endDate }) => {
		this.props.dispatch(setStartDate({ startDate }));
		this.props.dispatch(setEndDate({ endDate }));
	};
	onFocusChange = calendarFocused => {
		this.setState({ calendarFocused });
	};
	render() {
		console.log(this.props.filters.startDate);
		return (
			<div className="filters-container">
				<div>
					<input
						type="text"
						placeholder="search by text"
						onChange={event => {
							this.props.dispatch(
								setTextFilter(event.target.value)
							);
						}}
						className="text-input"
					/>
				</div>
				<div>
					<select
						onChange={e => {
							if (e.target.value === "date") {
								this.props.dispatch(sortByDate());
							} else if (e.target.value === "amount") {
								this.props.dispatch(sortByAmount());
							} else if (e.target.value === "none") {
								this.props.dispatch(clearSort());
							}
						}}
						className="filter-by"
					>
						<option value="none" className="option">
							{" "}
							-{" "}
						</option>
						<option value="date" className="option">
							{" "}
							Date
						</option>
						<option value="amount" className="option">
							{" "}
							Amount
						</option>
					</select>
				</div>
				<div className="date-picker">
					<DateRangePicker
						startDate={this.props.filters.startDate}
						endDate={this.props.filters.endDate}
						onDatesChange={this.onDatesChange}
						focusedInput={this.state.calendarFocused}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1}
						isOutsideRange={() => {
							false;
						}}
						showClearDates={true}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	filters: state.filters
});

export default connect(mapStateToProps)(ExpensesFilterInputs);
