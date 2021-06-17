// import firebase from "firebase";
import firebase from "firebase/app";
import "firebase/auth"; // for authentication
// import "firebase/storage"; // for storage
// import "firebase/database"; // for realtime database
// import "firebase/firestore"; // for cloud firestore
// import "firebase/messaging"; // for cloud messaging
// import "firebase/functions"; // for cloud functions

const auth = {
  register: (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },
  login: (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  logout: () => {
    return firebase.auth().signOut();
  }
};

export default auth;
