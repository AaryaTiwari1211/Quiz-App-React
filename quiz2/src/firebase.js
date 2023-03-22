import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDoZ6MVY3O0WOrfafPb6bm-EFuH5VWdexU",
    authDomain: "testauth-55999.firebaseapp.com",
    projectId: "testauth-55999",
    storageBucket: "testauth-55999.appspot.com",
    messagingSenderId: "760700174479",
    appId: "1:760700174479:web:fa1e7701ad9a1bfa0330fa",
    measurementId: "G-88CG3SY9H0"
};

const fire = firebase.initializeApp(firebaseConfig)

export default fire; 