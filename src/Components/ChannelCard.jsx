import { CheckCircle, LocalHospital } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/FetchFromApi";
import { useNavigate } from "react-router-dom";

const ChannelCard = ({ id, origin }) => {
	const redirect = useNavigate();
	const [channelDetail, setchannelDetail] = useState(null);

	useEffect(() => {
		fetchData(`channels?part=snippet&id=${id}`).then((data) =>
			setchannelDetail(data.items[0])
		);
	}, [id]);
	const subscribe = (e) => {
		e.target.textContent =
			e.target.textContent === "Subscribe" ? "Unsubscribe" : "Subscribe";
		e.target.style.backgroundColor =
			e.target.textContent === "Subscribe" ? "white" : "#272727";
		e.target.style.color =
			e.target.textContent === "Subscribe" ? "black" : "white";

		if (e.target.textContent === "Subscribe") {
			// localStorage.removeItem("id");
		} else {
			localStorage.setItem("id", JSON.stringify([{ id: id }]));
		}
	};
	return (
		<>
			{origin == "search" ? (
				<>
					{channelDetail == null ? null : (
						<div className="channelCard">
							<div className="image" onClick={() => redirect(`/channel/${id}`)}>
								<img src={channelDetail.snippet.thumbnails.high.url} alt="" />
							</div>
							<div className="info">
								<div
									className="left"
									onClick={() => redirect(`/channel/${id}`)}
								>
									<h2 style={{ display: "flex", alignItems: "center" }}>
										{channelDetail.brandingSettings.channel.title}
										<CheckCircle
											sx={{ fontSize: 16, color: "gray", ml: "5px" }}
										/>
									</h2>
									<p>
										<span className="customurl">
											{channelDetail.snippet.customUrl}
										</span>
										<span className="space">&nbsp;</span>
										<span className="dot">·</span>

										<span className="space">&nbsp;</span>
										{/* <span> </span> */}
										{
											<YourComponent
												subscribers={channelDetail.statistics.subscriberCount}
											/>
										}
									</p>
									<p className="des">
										{channelDetail.brandingSettings.channel.description.slice(
											0,
											100
										)}
										...
										<span>&nbsp;</span>
										<span>&nbsp;</span>
									</p>
								</div>
								<div className="right">
									<button
										onClick={(e) => {
											subscribe(e);
										}}
									>
										Subscribe
									</button>
								</div>
							</div>
						</div>
					)}
				</>
			) : (
				<></>
			)}
		</>
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

export default ChannelCard;
