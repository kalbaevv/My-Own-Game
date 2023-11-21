import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface IDefaultInput {
	label: string;
	placeholder: string;
}

export default function BasicTextFields(props: IDefaultInput) {
	const { label, placeholder } = props;
	return (
		<Box
			component="form"
			sx={{
				"& > :not(style)": { m: 1, width: "25ch" },
			}}
			noValidate
			autoComplete="off">
			<TextField
				sx={{ backgroundColor: "#DCBFFF" }}
				color="secondary"
				id="filled-basic"
				placeholder={placeholder}
				label={label}
				variant="filled"
			/>
		</Box>
	);
}
