import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCsn0SZ6WgqmqNUdnIIx87B6abd7mF2hj4",
  authDomain: "adv-project-ama.firebaseapp.com",
  projectId: "adv-project-ama",
  storageBucket: "adv-project-ama.firebasestorage.app",
  messagingSenderId: "989493649898",
  appId: "1:989493649898:web:245eac829a4968a860d293"
};

const app = initializeApp(firebaseConfig);

// ✅ Correct for Expo
export const auth = getAuth(app);

// ✅ Firestore
export const db = getFirestore(app);