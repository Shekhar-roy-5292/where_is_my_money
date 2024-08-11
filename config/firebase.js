// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getFirestore, collection} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD-2nQRBHYOUFJpv-K5ilFjuMDZaJp52_I',
  authDomain: 'money-lead-f0517.firebaseapp.com',
  projectId: 'money-lead-f0517',
  storageBucket: 'money-lead-f0517.appspot.com',
  messagingSenderId: '76398288663',
  appId: '1:76398288663:web:4ceb949260da1b6a246152',
  measurementId: 'G-DJZ21TTV1K',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripRef = collection(db, 'trips');
export const expensesRef = collection(db, 'expenses');
export default app;
