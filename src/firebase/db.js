import firebase from 'firebase';
import 'firebase/firestore';
import {firestorePlugin} from 'vuefire';
import Vue from 'vue';
Vue.use(firestorePlugin);
var firebaseConfig = {
    
  };
  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig).firestore();
  firebase.analytics();
  firebase.performance();