import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/FetchFromApi";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
import SuggestedVideo from "./SuggestedVideo";

const VideoDetail = () => {
	const { id } = useParams();
	const [videoDetail, setvideoDetail] = useState(null);
	const [video, setvideo] = useState(null);
	useEffect(() => {
		fetchData(`videos?part=snippet,statistics&id=${id}`).then((data) =>
			setvideoDetail(data.items[0])
		);
		fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
			(data) => setvideo(data.items)
		);
	}, [id]);

	// if (!videoDetail?.snippet) return "";
	// const {
	// 	snippet: { title, channelId },
	// } = videoDetail;

	return (
		<div className="videoDetail">
			<div className="left">
				<ReactPlayer
					url={`https://www.youtube.com/watch?v=${id}`}
					className="react-player"
					controls
					playing={true}
					muted={true}
					width={"100%"}
					height={"auto"}
				/>
				<h3 style={{ margin: "10px", fontSize: "20px" }}>
					{videoDetail?.snippet?.title}
				</h3>
				{/* <p>333 views</p> */}
				<ChannelCard id={videoDetail?.snippet?.channelId} origin={"search"} />
			</div>

			<div className="suggested">
				<SuggestedVideo data={video} />
			</div>
		</div>
	);
};

export default VideoDetail;
