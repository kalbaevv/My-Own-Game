import { Box } from "@mui/material";
import DefaultInput from "../../UI/DefaultInput/DefaultInput";

export default function NameForm() {
	return (
		<Box
			className="flex justify-center"
			style={{
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
			}}>
			<DefaultInput label="name" placeholder="enter your name" />
		</Box>
	);
}
