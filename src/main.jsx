import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//configuracion de FireBase
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvGuySvZgnznV5r47BBK0jWF5-Z0kq6j4",
  authDomain: "cursoreactcoder-a2a56.firebaseapp.com",
  projectId: "cursoreactcoder-a2a56",
  storageBucket: "cursoreactcoder-a2a56.appspot.com",
  messagingSenderId: "766238139617",
  appId: "1:766238139617:web:6445c818faa3aebf1003a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
