import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGING_SENDER_ID,
  // appId: process.env.APP_ID,
  // measurementId: process.env.MEASUREMENT_ID,
  apiKey: 'AIzaSyAWDp7kVxFhEYWQoQGCkvnHBuUjoq6Chu8',
  authDomain: 'long-list-stark.firebaseapp.com',
  projectId: 'long-list-stark',
  storageBucket: 'long-list-stark.appspot.com',
  messagingSenderId: '66689839681',
  appId: '1:66689839681:web:6bc2acfb2a00e46a6f0cc0',
  measurementId: 'G-JKQV7F3GQ6',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
db.settings({});

export const storageService = firebase.storage();

export const getImageUrl = async (imageRef: string) => {
  const storageRef = storageService.ref().child(imageRef);
  return await storageRef.getDownloadURL();
};
