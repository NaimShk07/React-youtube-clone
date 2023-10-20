import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";

const SkeletonCard = () => {
	return (
		<Box className="videoCard">
			<Skeleton
				variant="rectangular"
				style={{
					backgroundColor: "#2D3134",
					height: "100%",
					width: "100%",
				}}
			/>
			<Stack direction={"row"} spacing={1}>
				<Skeleton
					variant="rectangular"
					style={{
						backgroundColor: "#2D3134",
						height: "50px",
						aspectRatio: "1",
						borderRadius: "50%",
						marginTop: "10px",
					}}
				/>

				<Box width={"90%"}>
					<Skeleton
						variant="rectangular"
						style={{
							backgroundColor: "#2D3134",
							height: "30%",
							width: "90%",
							marginTop: "10px",
							borderRadius: "5px",
						}}
					/>
					<Skeleton
						variant="rectangular"
						style={{
							backgroundColor: "#2D3134",
							height: "30%",
							width: "70%",
							marginTop: "10px",
							borderRadius: "5px",
						}}
					/>
				</Box>
			</Stack>
		</Box>
	);
};

export default SkeletonCard;
