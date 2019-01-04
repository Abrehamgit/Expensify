import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header/Header";
import DashBoard from "../components/DashBoard/DashBoard";
import CreateExpense from "../components/CreateExpense/CreateExpense";
import EditExpense from "../components/EditExpense/EditExpense";
import Help from "../components/Help/Help";
import PageNotFound from "../components/PageNotFound/PageNotFound";

const AppRouter = () => (
	<div>
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route path="/" component={DashBoard} exact={true} />
					<Route
						path="/createExpense"
						component={CreateExpense}
						exact={true}
					/>
					<Route
						path="/editExpense/:id"
						component={EditExpense}
						exact={true}
					/>
					<Route path="/help" component={Help} exact={true} />
					<Route component={PageNotFound} exact={true} />
				</Switch>
			</div>
		</BrowserRouter>
	</div>
);

export default AppRouter;
