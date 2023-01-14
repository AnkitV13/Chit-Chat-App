import Firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";

const app ={
    apiKey: "AIzaSyAQhmLq98szLVTw4IIGisSK7pzTZ2YZwVM",
    authDomain: "chit-chat-530b4.firebaseapp.com",
    projectId: "chit-chat-530b4",
    storageBucket: "chit-chat-530b4.appspot.com",
    messagingSenderId: "54036464048",
    appId: "1:54036464048:web:8fd4b3304562fd40be5675"
};

const FirebaseApp=Firebase.initializeApp(app);
const db=FirebaseApp.firestore();
const auth=Firebase.auth();
const provider=new Firebase.auth.GoogleAuthProvider();

export {db, auth, provider};