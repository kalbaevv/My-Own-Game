import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "../src/store/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GamePage from "./pages/GamePage.tsx";
import QuestionItem from "./Components/QuestionItem/QuestionItem.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/top-score",
		element: <div>top score</div>,
	},

	{
		path: "/questions",
		element: <GamePage />,
	},

	{
		path: "/questions/:questionId",
		// element: <QuestionItem />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
