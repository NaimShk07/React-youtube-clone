import React from "react";
import "./Styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Feed from "./Components/Feed";

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path={"/"} element={<Feed />} />
			</Routes>
		</Router>
	);
};

export default App;
