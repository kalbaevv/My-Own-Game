import { configureStore } from "@reduxjs/toolkit";
import firebaseReducer from "./firebaseSlice.ts";

export const store = configureStore({
	reducer: {
		firebase: firebaseReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type appDispatch = typeof store.dispatch;
