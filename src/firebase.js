// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYv1gFjDB88Sk39GnmrEWytYVDZ0IiJgE",
  authDomain: "diploma-6c39e.firebaseapp.com",
  projectId: "diploma-6c39e",
  storageBucket: "diploma-6c39e.appspot.com",
  messagingSenderId: "919369848138",
  appId: "1:919369848138:web:89f9afdf0fb61feb605db3"
};

// Инициализация приложения
const app = initializeApp(firebaseConfig);
// Инициализация базы данных
const db = getFirestore(app);

// Получение списка категорий (коллекции документов)
export const categories = collection(db, 'categories');