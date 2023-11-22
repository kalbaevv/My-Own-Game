import { createSlice } from "@reduxjs/toolkit";

interface ISelectedQuestion {
	question: string;
}

interface IModalState {
	isModalOpen: boolean;
	selectedQuestion: ISelectedQuestion;
}

const initialState: IModalState = {
	isModalOpen: false,
	selectedQuestion: {
		question: "",
	},
};

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		setQuestion: (state, action) => {
			state.isModalOpen = true;
			state.selectedQuestion = action.payload;
			console.log(state.selectedQuestion, "selected question");
		},
	},
});

export const { setQuestion } = modalSlice.actions;

export default modalSlice.reducer;
