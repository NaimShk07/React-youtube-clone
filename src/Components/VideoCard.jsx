import { CheckCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

const VideoCard = ({ data, origin }) => {
	const redirect = useNavigate();

	return (
		<>
			<div className="videoCard">
				<img
					src={data.snippet.thumbnails.high.url}
					width={"100%"}
					style={{ marginTop: "-20px" }}
					alt=""
					onClick={() => redirect(`/video/${data.id.videoId}`)}
				/>

				<h4 onClick={() => redirect(`/video/${data.id.videoId}`)}>
					{data.snippet.title}
				</h4>

				<p onClick={() => redirect(`/channel/${data.snippet.channelId}`)}>
					<ToolTip value={data.snippet.channelTitle} />
				</p>
			</div>
		</>
	);
};

const ToolTip = ({ value }) => {
	return (
		<Tooltip title={value} style={{ display: "flex", alignItems: "center" }}>
			<Typography>{value}</Typography>
			<CheckCircle sx={{ fontSize: 16, color: "gray", ml: "5px" }} />
		</Tooltip>
	);
};

export default VideoCard;
