import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCGkr--nrhq-fB6hGldixuCN13Z_0gpHOs",
    authDomain: "wellness-bet-exercise.firebaseapp.com",
    databaseURL: "https://wellness-bet-exercise.firebaseio.com",
    projectId: "wellness-bet-exercise",
    storageBucket: "wellness-bet-exercise.appspot.com",
    messagingSenderId: "243497202990",
    appId: "1:243497202990:web:4c85af3f17aba2c0"
  };  

const fire = firebase.initializeApp(firebaseConfig); 

export default fire; 