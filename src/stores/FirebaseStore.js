import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCMN5k4e8-zBN0AF3mVQ8cFm1o78r9613I",
    authDomain: "musiccollector-f2690.firebaseapp.com",
    databaseURL: "https://musiccollector-f2690.firebaseio.com",
    projectId: "musiccollector-f2690",
    storageBucket: "musiccollector-f2690.appspot.com",
    messagingSenderId: "174595502938",
};

export default firebaseApp = firebase.initializeApp(firebaseConfig);