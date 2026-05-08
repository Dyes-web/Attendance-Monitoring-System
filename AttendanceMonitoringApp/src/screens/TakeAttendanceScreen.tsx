// TakeAttendanceScreen.tsx - Mark Attendance
import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { Card, Title, Button, Chip } from 'react-native-paper';
import { FAB } from 'react-native-paper';

interface Student {
  id: string;
  name: string;
}

const TakeAttendanceScreen = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedClass, setSelectedClass] = useState('');

  const markPresent = (studentId: string) => {
    Alert.alert('Marked', 'Student marked present');
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Take Attendance - {selectedClass}</Title>
      <FlatList
        data={students}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.name}</Title>
              <View style={styles.chips}>
                <Chip onPress={() => markPresent(item.id)} mode="flat">Present</Chip>
                <Chip mode="outlined">Absent</Chip>
              </View>
            </Card.Content>
          </Card>
        )}
        keyExtractor={(item) => item.id}
      />
      <FAB icon="check" style={styles.fab} onPress={() => Alert.alert('Saved', 'Attendance saved')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { padding: 20, textAlign: 'center' },
  card: { margin: 10 },
  chips: { flexDirection: 'row', marginTop: 10 },
  fab: { position: 'absolute', margin: 16, right: 16, bottom: 16 },
});

export default TakeAttendanceScreen;

