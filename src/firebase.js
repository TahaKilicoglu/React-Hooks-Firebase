import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyDjQ7io-fNMcdNbKrSHPDP3HEaPcL9a5k8",
  authDomain: "deneme-18dec.firebaseapp.com",
  databaseURL: "https://deneme-18dec-default-rtdb.firebaseio.com",
  projectId: "deneme-18dec",
  storageBucket: "deneme-18dec.appspot.com",
  messagingSenderId: "105584418489",
  appId: "1:105584418489:web:2db5b2e5e9347ecf9a0568"
};

firebase.initializeApp(config);

export default firebase.database();
