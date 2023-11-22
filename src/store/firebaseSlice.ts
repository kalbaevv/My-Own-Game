import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDatabase, ref, push, set } from "firebase/database";
import { app } from "../firebaseConfig";

const db = getDatabase(app);

interface IUser {
	name: string;
	id: number;
	points: string;
}

export const addUser = createAsyncThunk<IUser, string>(
	"firebase/addUser",
	async (userData: string) => {
		try {
			const user: IUser = {
				name: userData,
				id: Date.now(),
				points: "",
			};

			const newUserRef = push(ref(db));
			await set(newUserRef, user);

			console.log("User added:", user);

			return user;
		} catch (error) {
			console.error("Error adding user:", error);
			throw error;
		}
	}
);

interface IInitialState {
	userName: string;
	loading: boolean;
	error: any;
}
const initialState: IInitialState = {
	userName: "",
	loading: false,
	error: null,
};

const firebaseSlice = createSlice({
	name: "firebase",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(addUser.pending, (state) => {
				state.loading = true;
			})
			.addCase(addUser.fulfilled, (state, action) => {
				state.userName = action.payload.name;
				state.loading = false;
			})
			.addCase(addUser.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			});
	},
});

export const {} = firebaseSlice.actions;
export default firebaseSlice.reducer;
