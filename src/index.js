import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./routers/AppRouter";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";
import configureStore from "./redux/store/configureStore";
import { Provider } from "react-redux";
import "font-awesome/css/font-awesome.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const store = configureStore();

const App = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(App, document.getElementById("root"));
registerServiceWorker();
