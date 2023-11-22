import { Box } from "@mui/material";
import { useState } from "react";
import DefaultInput from "../../UI/DefaultInput/DefaultInput";
import DefaultButton from "../../UI/DefaultButton/DefaultButton";
import { addUser } from "../../store/firebaseSlice";
import { useAppDispatch } from "../../hooks/hooks";

export default function NameForm() {
	const [nameValue, setNameValue] = useState("");

	const dispatch = useAppDispatch();
	//* const { userName } = useAppSelector((state) => state.firebase);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNameValue(event.target.value);
	};

	const handleSubmit = () => {
		dispatch(addUser(nameValue));
	};

	return (
		<Box
			className="flex justify-center items-center"
			style={{
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
			}}>
			<DefaultInput
				onChange={handleChange}
				label="name"
				placeholder="enter your name"
			/>
			<DefaultButton title="Lets go!" onClick={handleSubmit} />
		</Box>
	);
}
