import { useNavigate } from "react-router-dom";

interface IQuestion {
	question: string;
	answer: string;
	id: number;
}

interface IItem {
	item: IQuestion;
}

export default function QuestionItem({ item }: IItem) {
	return (
		<div>
			<p>{item.question}</p>
			<p style={{ color: "green" }}>{item.answer}</p>
		</div>
	);
}
