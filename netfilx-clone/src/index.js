import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import { App } from "./app";
import { FirebaseContext } from "./context/firebase";
//import { seedDatabase } from "./seed";

const REACT_APP_MESSAGING_SENDER_ID = process.env.REACT_APP_MESSAGING_SENDER_ID;
const REACT_APP_APP_ID = process.env.REACT_APP_APP_ID;
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

const config = {
  apiKey: REACT_APP_API_KEY,
  authDomain: "netflix-scrimba-clone.firebaseapp.com",
  databaseURL: "https://netflix-scrimba-clone.firebaseio.com",
  projectId: "netflix-scrimba-clone",
  storageBucket: "netflix-scrimba-clone.appspot.com",
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
};

const firebase = window.firebase.initializeApp(config);
//seedDatabase(firebase);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,

  document.getElementById("root")
);
