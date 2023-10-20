import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchData } from "../utils/FetchFromApi";
import { Categories } from "./Categories";
import { CheckCircle } from "@mui/icons-material";
import VideoCard from "./VideoCard";

const ChannelDetail = () => {
	const redirect = useNavigate();

	const [channelDetail, setchannelDetail] = useState(null);
	const [channelVideos, setchannelVideos] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		fetchData(`channels?part=snippet&id=${id}`).then((data) =>
			setchannelDetail(data.items[0])
		);
		fetchData(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
			setchannelVideos(data.items)
		);
	}, [id]);

	return (
		<div className="channel">
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
				{channelDetail == null ? null : (
					<>
						<div className="banner">
							<img
								src={channelDetail.brandingSettings.image.bannerExternalUrl}
								alt=""
							/>
						</div>
						<div className="channelInfo">
							<img src={channelDetail.snippet.thumbnails.high.url} alt="" />
							<div className="info">
								<h1 style={{ display: "flex", alignItems: "center" }}>
									{channelDetail.brandingSettings.channel.title}
									<CheckCircle
										sx={{ fontSize: 16, color: "gray", ml: "5px" }}
									/>
								</h1>
								<p>
									{channelDetail.snippet.customUrl}
									<span>&nbsp;</span>
									{
										<YourComponent
											subscribers={channelDetail.statistics.subscriberCount}
										/>
									}
									<span>&nbsp;</span>
									<span>·</span>
									<span>&nbsp;</span>
									<span>{channelDetail.statistics.videoCount}</span>
									<span>&nbsp;</span>
									videos
								</p>

								{channelDetail.brandingSettings.channel.description ==
								null ? null : (
									<>
										<p>
											{channelDetail.brandingSettings.channel.description.slice(
												0,
												100
											)}
											...
											<span>&nbsp;</span>
											<span>&nbsp;</span>
										</p>
									</>
								)}

								<button
									onClick={(e) => {
										e.target.textContent =
											e.target.textContent === "Subscribe"
												? "Unsubscribe"
												: "Subscribe";
										e.target.style.backgroundColor =
											e.target.textContent === "Subscribe"
												? "white"
												: "#272727";
										e.target.style.color =
											e.target.textContent === "Subscribe" ? "black" : "white";
									}}
								>
									Subscribe
								</button>
							</div>
						</div>
						<div className="channelVid">
							<h2>Videos</h2>

							<div className="videos">
								{channelVideos.map((value, index) => (
									<VideoCard data={value} key={index} />
								))}
							</div>
						</div>
					</>
				)}
			</main>
		</div>
	);
};

const formatSubscribers = (subscribers) => {
	if (subscribers >= 1000000) {
		return (subscribers / 1000000).toFixed(2) + "M subscribers";
	} else if (subscribers >= 1000) {
		return Math.floor(subscribers / 1000) + "K subscribers";
	} else {
		return subscribers + " subscribers";
	}
};

const YourComponent = ({ subscribers }) => {
	const formattedSubscribers = formatSubscribers(subscribers);

	return <span>{formattedSubscribers}</span>;
};

export default ChannelDetail;
