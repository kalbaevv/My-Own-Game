// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyC-9qPvQKEL06xaDBCsecGyIEV6wxvnYP8",
	authDomain: "my-own-game-e8fae.firebaseapp.com",
	projectId: "my-own-game-e8fae",
	storageBucket: "my-own-game-e8fae.appspot.com",
	messagingSenderId: "494910094541",
	appId: "1:494910094541:web:5ae4928bf129ce345cfd84",
	measurementId: "G-K8GVKE11P9",
};

export const app = initializeApp(firebaseConfig);
