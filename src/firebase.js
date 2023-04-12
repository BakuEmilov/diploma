// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaVfTreDB8xD0sFgSX9Bs33z4-1rpkgp0",
  authDomain: "diploma-80372.firebaseapp.com",
  projectId: "diploma-80372",
  storageBucket: "diploma-80372.appspot.com",
  messagingSenderId: "385982947477",
  appId: "1:385982947477:web:06d880a8d1fea59e5abb9c"
};

// Инициализация приложения
const app = initializeApp(firebaseConfig);
// Инициализация базы данных
const db = getFirestore(app);

// Получение списка категорий (коллекции документов)
export const categoryCollection = collection(db, 'categories');