import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBBe74P3WZcVVEKjzPwNbhAE2q09bqP7Sc",
    authDomain: "whatsapp-clone-6e0b0.firebaseapp.com",
    projectId: "whatsapp-clone-6e0b0",
    storageBucket: "whatsapp-clone-6e0b0.appspot.com",
    messagingSenderId: "25922126403",
    appId: "1:25922126403:web:3c4a6bd7f2ba8e8f140af6",
    measurementId: "G-KNNEQDGKL5"
  };


  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
 
  