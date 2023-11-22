import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionItem from "../Components/QuestionItem/QuestionItem";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import QuestionModal from "../Components/QuestionModal/QuestionModal";
import { setQuestion } from "../store/modalSlice";
import { IQuestion } from "../types";
interface Clue {
	id: number;
	// Add other properties based on the actual structure of the data
	question: string;
	answer: string;
}

export default function GamePage() {
	const [data, setData] = useState<Clue[]>([]);
	const [error, setError] = useState("");

	const { isModalOpen } = useAppSelector((state) => state.modal);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://jservice.io/api/category?id=150"
				);
				setData(response.data.clues);
				console.log(response.data.clues, "data");
			} catch (error: any) {
				setError(error);
				console.log(error);
			}
		};
		fetchData();
	}, []);

	const handleClick = (item: IQuestion) => {
		dispatch(setQuestion(item));
	};

	return (
		<div>
			{data.map((item) => (
				<div onClick={() => handleClick(item)} key={item.id}>
					<QuestionItem item={item} />
				</div>
			))}

			<QuestionModal />
		</div>
	);
}
