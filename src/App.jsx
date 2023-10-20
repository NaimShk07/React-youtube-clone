import React from "react";
import "./Styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Feed from "./Components/Feed";
import ChannelDetail from "./Components/ChannelDetail";
import SearchPage from "./Components/SearchPage";
import VideoDetail from "./Components/VideoDetail";

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path={"/"} element={<Feed />} />
				<Route path={"/:cate"} element={<Feed />} />
				<Route path={"/video/:id"} element={<VideoDetail />} />
				<Route path={"/channel/:id"} element={<ChannelDetail />} />
				<Route path={"/search/:searchTerm"} element={<SearchPage />} />
			</Routes>
		</Router>
	);
};

export default App;
