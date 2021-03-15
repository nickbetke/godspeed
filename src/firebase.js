import firebase from "firebase";

  const firebaseConfig = {
    apiKey: "AIzaSyDlBhl1-ToqZB13YAb3FvZP046BaDEYL2Q",
    authDomain: "cinema-a271a.firebaseapp.com",
    databaseURL: "https://cinema-a271a-default-rtdb.firebaseio.com",
    projectId: "cinema-a271a",
    storageBucket: "cinema-a271a.appspot.com",
    messagingSenderId: "919569920775",
    appId: "1:919569920775:web:53809a44469f35aaee0ba2"
  };
  
const fireDb = firebase.initializeApp(firebaseConfig);
const fdb = fireDb.database().ref();
export default fdb;
