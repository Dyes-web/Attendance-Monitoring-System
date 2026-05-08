import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { Card, Title, Button, Checkbox } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { markAttendance } from './services/attendanceService';

const sampleStudents = [
  { id: '59839517', name: 'Agie C. Alaton', uid: '59839517', present: false },
  { id: '59839518', name: 'John Doe', uid: '59839518', present: true },
  { id: '59839519', name: 'Jane Smith', uid: '59839519', present: false },
];

const TakeAttendanceScreen = () => {
  const route = useRoute<any>();
  const classId = route.params?.classId || 'adv102';
  const [studentList, setStudentList] = useState(sampleStudents);
  const [loading, setLoading] = useState(false);
  const date = new Date().toISOString().split('T')[0];

  const togglePresent = (studentId: string) => {
    setStudentList(prev => prev.map(student => 
      student.id === studentId ? { ...student, present: !student.present } : student
    ));
  };

  const submitAttendance = async () => {
    setLoading(true);
    try {
      for (const student of studentList) {
        await markAttendance(classId, date, student.uid, student.present ? 'present' : 'absent');
      }
      Alert.alert('SUCCESS', 'All attendance saved to Firestore adv-project-ama!');
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Failed to save');
    }
    setLoading(false);
  };

  const renderStudent = ({ item }: { item: typeof sampleStudents[0] }) => (
    <Card style={styles.studentCard}>
      <Card.Content style={styles.studentRow}>
        <Title>{item.name}</Title>
        <Checkbox status={item.present ? 'checked' : 'unchecked'} onPress={() => togglePresent(item.id)} />
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Card style={styles.headerCard}>
        <Card.Content>
          <Title>Mark Attendance</Title>
          <Title>{classId.toUpperCase()} | {date}</Title>
          <Button mode="contained" onPress={submitAttendance} loading={loading} style={styles.submitButton}>
            Submit Attendance
          </Button>
        </Card.Content>
      </Card>
      <FlatList data={studentList} renderItem={renderStudent} keyExtractor={(item) => item.id} style={styles.list} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  headerCard: { margin: 20, elevation: 4 },
  studentCard: { marginHorizontal: 20, marginVertical: 5, elevation: 2 },
  studentRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  list: { flex: 1 },
  submitButton: { marginTop: 10 },
});

export default TakeAttendanceScreen;

