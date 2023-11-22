import Button from "@mui/material/Button";

interface IDefaultButton {
	title: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function DefaultButton(props: IDefaultButton) {
	const { title, onClick } = props;
	return (
		<Button
			onClick={onClick}
			color="secondary"
			sx={{ height: 55 }}
			variant="contained">
			{title}
		</Button>
	);
}
