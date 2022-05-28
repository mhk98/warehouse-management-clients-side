// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb04ZV1Zxtb-BW8xCO3xLtgsB4m0j1Weg",
  authDomain: "x-autos-warehouse.firebaseapp.com",
  projectId: "x-autos-warehouse",
  storageBucket: "x-autos-warehouse.appspot.com",
  messagingSenderId: "713839128064",
  appId: "1:713839128064:web:4a7d8762440f3a1497b2e5"
};


// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId,
// };

//Stackoverflow question link
//https://stackoverflow.com/questions/72145345/how-to-connect-firebase-through-use-environment-variable

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;