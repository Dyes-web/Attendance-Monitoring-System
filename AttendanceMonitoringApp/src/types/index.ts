export interface User {
  uid: string;
  email: string;
  role: 'teacher' | 'admin' | 'student';
  name?: string;
}

export interface Student {
  id: string;
  name: string;
  email?: string;
  classId: string;
}

export interface Class {
  id: string;
  name: string;
  teacherId: string;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  classId: string;
  date: string; // YYYY-MM-DD
  status: 'present' | 'absent' | 'late';
}

export interface ClassWithStudents {
  class: Class;
  students: Student[];
}

