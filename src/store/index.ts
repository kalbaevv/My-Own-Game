import { configureStore } from "@reduxjs/toolkit";
import firebaseReducer from "./firebaseSlice.ts";
import modalReducer from "./modalSlice";

export const store = configureStore({
	reducer: {
		firebase: firebaseReducer,
		modal: modalReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type appDispatch = typeof store.dispatch;
