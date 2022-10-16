import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    "apiKey": "AIzaSyAJjUnQsRlYcoozYxwujJtg9wYaUcTt6zI",
    "authDomain": "nutritionanalyzer-bf355.firebaseapp.com",
    "projectId": "nutritionanalyzer-bf355",
    "storageBucket": "nutritionanalyzer-bf355.appspot.com",
    "messagingSenderId": "749766194836",
    "appId": "1:749766194836:web:b2eebd3b7b0edb14b7a681",
    "measurementId": "G-2VJ87WXTKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
db.settings({ ignoreUndefinedProperties: true })

export {app, db}