import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	projectId: process.env.PROJECT_ID,
	storageBucket: "imageuploader-ddce6.appspot.com",
	messagingSenderId: process.env.SENDER_ID,
	appId: process.env.APP_ID,
};

const app = initializeApp(firebaseConfig);

export const imageDb = getStorage(app);
