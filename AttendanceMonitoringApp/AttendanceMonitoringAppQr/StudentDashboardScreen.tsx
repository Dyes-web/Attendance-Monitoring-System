import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const StudentDashboardScreen = () => {
  const [section, setSection] = useState('2A');
  const [subject, setSubject] = useState('ADV 102');
  const navigation = useNavigation<any>();

  const handleViewAttendance = () => {
    navigation.navigate('StudentAttendance');
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Student Dashboard</Title>
          <Picker selectedValue={section} onValueChange={setSection} style={styles.picker}>
            <Picker.Item label="2A" value="2A" />
            <Picker.Item label="2B" value="2B" />
            <Picker.Item label="2C" value="2C" />
            <Picker.Item label="2D" value="2D" />
            <Picker.Item label="2E" value="2E" />
            <Picker.Item label="2F" value="2F" />
          </Picker>
          <Picker selectedValue={subject} onValueChange={setSubject} style={styles.picker}>
            <Picker.Item label="ADV 102" value="ADV 102" />
            <Picker.Item label="Networking 101" value="Networking 101" />
          </Picker>
          <Button mode="contained" onPress={handleViewAttendance} style={styles.button}>
            View My Attendance
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    padding: 20,
    elevation: 4,
  },
  picker: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
});

export default StudentDashboardScreen;

