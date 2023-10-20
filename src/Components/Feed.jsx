import React, { useEffect, useRef, useState } from "react";
import { Categories } from "./Categories";
import { fetchData } from "../utils/FetchFromApi";
import SkeletonCard from "./SkeletonCard";

import VideoCard from "./VideoCard";
import { useParams } from "react-router-dom";
import ChannelCard from "./ChannelCard";

const Feed = () => {
	const { cate } = useParams();
	const [selectedCategory, setselectedCategory] = useState(
		cate == null ? "New" : cate
	);
	const [videos, setvideos] = useState([]);
	const [isLoading, setisLoading] = useState(cate == null ? true : true);
	const divForScroll = useRef(null);
	useEffect(() => {
		fetching();
	}, [selectedCategory]);

	const fetching = async () => {
		fetchData(`search?part=snippet&q=${selectedCategory}`).then((data) =>
			setvideos(data.items)
		);
		setTimeout(() => {
			setisLoading(false);
		}, 500);
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
								divForScroll.current.scrollIntoView(true);
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
				<div ref={divForScroll}></div>
				<h4>
					{selectedCategory} <span style={{ color: "red" }}>videos</span>
				</h4>
				<div className="videos">
					{isLoading
						? videos.map((value, index) => <SkeletonCard key={index} />)
						: videos.map((value, index) => (
								<>
									{value.id.channelId && <ChannelCard data={value} />}
									{value.id.videoId && <VideoCard data={value} />}
								</>
						  ))}
				</div>
			</main>
		</div>
	);
};

export default Feed;
