import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Categories } from "./Categories";
import VideoCard from "./VideoCard";
import { fetchData } from "../utils/FetchFromApi";
import ChannelCard from "./ChannelCard";

const SearchPage = () => {
	const redirect = useNavigate();
	const { searchTerm } = useParams();
	const [videos, setvideos] = useState([]);
	const [loader, setloader] = useState(true);
	const divForScroll = useRef(null);

	useEffect(() => {
		fetchData(`search?part=snippet&q=${searchTerm}`).then((data) =>
			setvideos(data.items)
		);
		divScroll();
	}, [searchTerm]);

	const divScroll = () => {
		divForScroll.current.scrollIntoView(true);
	};

	return (
		<div className="searchPage">
			<aside>
				<div className="buttons">
					{Categories.map((value) => (
						<button
							onClick={() => {
								return redirect(`/${value.name}`);
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
				{videos == null ? null : (
					<>
						<div ref={divForScroll}></div>
						<h4>
							Search Results for{" "}
							<span style={{ color: "red" }}>{searchTerm} </span>
						</h4>
						{videos.map((value, index) => (
							<>
								{value.id.channelId && (
									<ChannelCard id={value.id.channelId} origin={"search"} />
								)}
								{/* {value.id.videoId && <VideoCard data={value} />} */}
							</>
						))}
						<div className="videos">
							{videos.map((value, index) => (
								<>
									{/* {value.id.channelId && (
										<ChannelCard id={value.id.channelId} origin={"search"} />
									)} */}
									{value.id.videoId && <VideoCard data={value} key={index} />}
								</>
							))}
						</div>
					</>
				)}
			</main>
		</div>
	);
};

export default SearchPage;
