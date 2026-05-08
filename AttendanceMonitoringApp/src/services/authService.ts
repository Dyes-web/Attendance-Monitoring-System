import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebaseConfig';
import { User as AppUser } from '../types';

export const register = async (email: string, password: string, role: 'teacher' | 'student', name: string): Promise<void> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userDoc: AppUser = {
      uid: user.uid,
      email: user.email || '',
      role,
      name,
    };
    await setDoc(doc(db, 'users', user.uid), userDoc);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const login = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const logout = async (): Promise<void> => {
  await signOut(auth);
};

export const onAuthChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};
