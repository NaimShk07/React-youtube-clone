import { Skeleton } from "@mui/material";
import React from "react";

const SkeletonCard = () => {
	return (
		<div className="videoCard">
			<Skeleton
				variant="rectangular"
				style={{
					backgroundColor: "#2D3134",
					height: "100%",
					width: "100%",
				}}
			/>
			<Skeleton
				variant="rectangular"
				style={{
					backgroundColor: "#2D3134",
					height: "10%",
					width: "90%",
					marginTop: "10px",
				}}
			/>
			<Skeleton
				variant="rectangular"
				style={{
					backgroundColor: "#2D3134",
					height: "10%",
					width: "20%",
					marginTop: "10px",
				}}
			/>
		</div>
	);
};

export default SkeletonCard;
