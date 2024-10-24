// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Sua configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC2nx2fSu5xcOXiu7RQ9bLF7avPmWYwCqk",
    authDomain: "teste-aabeb.firebaseapp.com",
    projectId: "teste-aabeb",
    storageBucket: "teste-aabeb.appspot.com",
    messagingSenderId: "940610844683",
    appId: "1:940610844683:web:340f48da7895e3bb552f0e"
  };
// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
// Inicializa o Firestore
const db = getFirestore(app);
export { db };