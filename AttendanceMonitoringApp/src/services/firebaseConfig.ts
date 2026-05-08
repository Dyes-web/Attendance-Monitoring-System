import { initializeApp, getApps, getApp } from 'firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth } from 'firebase/auth';
// Expo/React Native persistence is handled via AsyncStorage directly in initializeAuth
// Newer Firebase versions removed `firebase/auth/react-native` typings.



import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyCsn0SZ6WgqmqNUdnIIx87B6abd7mF2hj4",
  authDomain: "adv-project-ama.firebaseapp.com",
  projectId: "adv-project-ama",
  storageBucket: "adv-project-ama.firebasestorage.app",
  messagingSenderId: "989493649898",
  appId: "1:989493649898:web:245eac829a4968a860d293"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Some Firebase versions don’t ship RN/Expo persistence helpers.
// Keep the persistence field optional to avoid build failures.
const persistence: any = AsyncStorage;


export const auth = initializeAuth(app, {
  persistence
});

export const db = getFirestore(app);

