import firebase from 'firebase';
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyClQHr47bP4y_9L0QId7CtVt2GKSn7t0lI",
  authDomain: "todolist-71416.firebaseapp.com",
  databaseURL: "https://todolist-71416-default-rtdb.firebaseio.com",
  projectId: "todolist-71416",
  storageBucket: "todolist-71416.appspot.com",
  messagingSenderId: "413616234952",
  appId: "1:413616234952:web:a7ef8b1990c74d94eaa0fd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()