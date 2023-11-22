import { useAppSelector } from "../../hooks/hooks";
import { Box, Typography } from "@mui/material";
import DefaultInput from "../../UI/DefaultInput/DefaultInput";

export default function () {
	const { isModalOpen, selectedQuestion } = useAppSelector(
		(state) => state.modal
	);

	return (
		<Box
			sx={{
				display: isModalOpen ? "block" : "none",
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				width: 400,
				backgroundColor: "#DCBFFF",
				border: "2px solid #D0A2F7",
				boxShadow: 24,
				borderRadius: 5,
				p: 4,
			}}>
			<Typography sx={{ color: "" }}>{selectedQuestion.question}</Typography>
			<DefaultInput label="answer" placeholder="enter answer" />
		</Box>
	);
}
