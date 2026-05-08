import { collection, addDoc, getDocs, query, doc, updateDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import type { Student, AttendanceRecord } from '../types';

export const addStudent = async (classId: string, student: Omit<Student, 'id'>): Promise<void> => {
  await addDoc(collection(db, `classes/${classId}/students`), student);
};

export const getStudentsByClass = async (classId: string): Promise<Student[]> => {
  const q = query(collection(db, `classes/${classId}/students`));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Student));
};

export const markAttendance = async (classId: string, date: string, studentId: string, status: 'present' | 'absent' | 'late'): Promise<void> => {
  const recordRef = doc(db, `classes/${classId}/attendance/${date}`, studentId);
  await updateDoc(recordRef, { studentId, classId, date, status });
};

export const getClassAttendance = async (classId: string, date: string) => {
  // Stub
  return [];
};
