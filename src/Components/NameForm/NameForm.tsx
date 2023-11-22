import { Box } from "@mui/material";
import { useState } from "react";
import DefaultInput from "../../UI/DefaultInput/DefaultInput";
import DefaultButton from "../../UI/DefaultButton/DefaultButton";
import { addUser } from "../../store/firebaseSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

export default function NameForm() {
	const [nameValue, setNameValue] = useState("");

	const dispatch = useAppDispatch();
	const { loading, error } = useAppSelector((state) => state.firebase);

	const navigate = useNavigate();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNameValue(event.target.value);
	};

	const handleSubmit = async () => {
		await dispatch(addUser(nameValue));
		if (!loading && error == null) {
			navigate("/questions");
		}
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
			{loading == true ? (
				<Loading />
			) : (
				<>
					<DefaultInput
						onChange={handleChange}
						label="name"
						placeholder="enter your name"
					/>
					<DefaultButton title="Lets go!" onClick={handleSubmit} />
				</>
			)}
		</Box>
	);
}
