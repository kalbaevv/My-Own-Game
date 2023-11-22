import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface IDefaultInput {
	label: string;
	placeholder: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function BasicTextFields(props: IDefaultInput) {
	const { label, placeholder, onChange } = props;
	return (
		<Box
			component="form"
			sx={{
				"& > :not(style)": { m: 1, width: "25ch" },
			}}
			noValidate
			autoComplete="off">
			<TextField
				onChange={onChange}
				sx={{ backgroundColor: "#DCBFFF" }}
				color="secondary"
				id="filled-basic"
				placeholder={placeholder}
				label={label}
				variant="outlined"
			/>
		</Box>
	);
}
