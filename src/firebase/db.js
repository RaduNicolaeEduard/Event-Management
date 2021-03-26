import firebase from 'firebase';
import 'firebase/firestore';
import {firestorePlugin} from 'vuefire';
import Vue from 'vue';
Vue.use(firestorePlugin);
var firebaseConfig = {
    apiKey: "AIzaSyBDuOPdNsy0bfckJpEEWM4lkfWQbUXV95c",
    authDomain: "revelion2021robi.firebaseapp.com",
    databaseURL: "https://revelion2021robi.firebaseio.com",
    projectId: "revelion2021robi",
    storageBucket: "revelion2021robi.appspot.com",
    messagingSenderId: "604429312844",
    appId: "1:604429312844:web:c010e6c35f250562ad65e9",
    measurementId: "G-72DE8YMG0D"
  };
  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig).firestore();
  firebase.analytics();
  firebase.performance();