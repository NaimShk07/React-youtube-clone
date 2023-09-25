import React, { useEffect, useState } from "react";
import { Categories } from "./Categories";
import { fetchData } from "../utils/FetchFromApi";
import SkeletonCard from "./SkeletonCard";

const Feed = () => {
	const [selectedCategory, setselectedCategory] = useState("New");
	const [videos, setvideos] = useState([]);
	const [isLoading, setisLoading] = useState(true);
	useEffect(() => {
		fetching();
	}, [selectedCategory, isLoading]);

	const fetching = async () => {
		fetchData(`search?part=snippet&q=${selectedCategory}`).then((data) =>
			setvideos(data.items)
		);
		console.log(videos);
		setTimeout(() => {
			setisLoading(true);
		}, 1000);
	};

	return (
		<div className="feed">
			<aside>
				<div className="buttons">
					{Categories.map((value) => (
						<button
							style={{
								background: value.name === selectedCategory && "#272727",
							}}
							onClick={() => {
								setselectedCategory(value.name);
								setisLoading(true);
							}}
							key={value.name}
						>
							<span>{value.icon}</span>
							<span>{value.name}</span>
						</button>
					))}
				</div>
				<div className="copy">Copyright 2023 Youtube</div>
			</aside>
			<main>
				<h4>
					{selectedCategory} <span style={{ color: "red" }}>videos</span>
				</h4>
				<div className="videos">
					{/* {videos.map((value, index) =>
						isLoading ? (
							<SkeletonCard />
						) : (
							<div className="videoCard" key={index}>
								<img
									src={value.snippet.thumbnails.high.url}
									width={"100%"}
									alt=""
								/>
							</div>
						)
					)} */}
					{isLoading
						? videos.map((value, index) => <SkeletonCard />)
						: videos.map((value, index) => (
								<div className="videoCard" key={index}>
									<img
										src={value.snippet.thumbnails.high.url}
										width={"100%"}
										alt=""
									/>
								</div>
						  ))}
				</div>
			</main>
		</div>
	);
};

const videoCard = () => {
	return <></>;
};

export default Feed;
