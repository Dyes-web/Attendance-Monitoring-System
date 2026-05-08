import { collection, doc, setDoc, getDocs, query } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const markAttendance = async (classId: string, date: string, studentUid: string, status: 'present' | 'absent') => {
  const record = {
    studentUid,
    classId,
    date,
    status,
    timestamp: new Date().toISOString()
  };
  await setDoc(doc(db, 'attendance', classId, date, studentUid), record);
};

export const getAttendanceRecords = async (classId: string, date: string) => {
  const q = query(collection(db, 'attendance', classId, date));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
};

