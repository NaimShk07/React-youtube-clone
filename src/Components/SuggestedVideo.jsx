import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

const SuggestedVideo = ({ data }) => {
	const redirect = useNavigate();

	return (
		<>
			{data == null ? null : (
				<>
					{data.map((value, index) => (
						<div key={index} style={{ aspectRatio: 3 / 2, cursor: "pointer" }}>
							<img
								src={value?.snippet?.thumbnails?.high?.url}
								alt=""
								width={"100%"}
								onClick={() => redirect(`/video/${value.id.videoId}`)}
							/>

							<h4 onClick={() => redirect(`/video/${value.id.videoId}`)}>
								{value.snippet.title.slice(0, 100)}
							</h4>
							<p
								onClick={() => redirect(`/channel/${value.snippet.channelId}`)}
								style={{
									display: "flex",
									alignItems: "center",
									marginTop: "10px",
								}}
							>
								{value.snippet.channelTitle}
								<CheckCircle sx={{ fontSize: 16, color: "gray", ml: "5px" }} />
							</p>
						</div>
					))}
				</>
			)}
		</>
	);
};

export default SuggestedVideo;
