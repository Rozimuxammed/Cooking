import firebase from "firebase";
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA_MdCHeUuPIMgOSs3iGZyF-YotTnxTWhQ",
    authDomain: "signup-8ac1c.firebaseapp.com",
    projectId: "signup-8ac1c",
    storageBucket: "signup-8ac1c.appspot.com",
    messagingSenderId: "490168843942",
    appId: "1:490168843942:web:c5afd16a3e62d548967e67",
    measurementId: "G-Y2SNB8ED1G"
};
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()

export { projectAuth }
