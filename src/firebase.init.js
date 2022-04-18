// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlg62oMEk3jxY_gHp4sp7kDxqaSk6hyZo",
    authDomain: "pro-fit-personal-trainer.firebaseapp.com",
    projectId: "pro-fit-personal-trainer",
    storageBucket: "pro-fit-personal-trainer.appspot.com",
    messagingSenderId: "365705337294",
    appId: "1:365705337294:web:d47e557a2e922f6164f39f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;