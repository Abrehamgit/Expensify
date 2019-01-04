import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./expensesList.css";
import { Fa } from "mdbreact";
import { connect } from "react-redux";

const ExpensesItem = ({
	description,
	amount,
	note,
	createdAt,
	id,
	dispatch,
	setId,
	switchHandle
}) => (
	<div>
		<div className="expense-container">
			<div>
				<Link to={`editExpense/${id}`}>
					{" "}
					<p className="description"> {description}</p>{" "}
				</Link>{" "}
				<div className="amount-mobile">
					{" "}
					<h3 className="amount"> ${amount.toLocaleString()} </h3>
				</div>
				<h4 className="createdAt">
					{" "}
					{moment(createdAt).format("MMM, Do YYYY, dddd")}{" "}
				</h4>
				<div className="icons-container-mobile">
					<Fa
						icon="trash"
						size="lg"
						onClick={() => {
							setId(id);
							switchHandle();
						}}
						className="delete-icon"
					/>
					<Link to={`editExpense/${id}`} className="edit-icon">
						{" "}
						<Fa icon="edit" size="lg" />{" "}
					</Link>
				</div>
			</div>
			<div className="amount-pc">
				{" "}
				<h3 className="amount"> ${amount.toLocaleString()} </h3>
			</div>
			<div className="icons-container-pc">
				<Fa
					icon="trash"
					size="lg"
					onClick={() => {
						setId(id);
						switchHandle();
					}}
					className="delete-icon"
				/>
				<Link to={`editExpense/${id}`} className="edit-icon">
					{" "}
					<Fa icon="edit" size="lg" />{" "}
				</Link>
			</div>
		</div>
	</div>
);

export default connect()(ExpensesItem);
