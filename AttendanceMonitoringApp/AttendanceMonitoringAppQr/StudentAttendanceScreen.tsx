import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, List } from 'react-native-paper';

const StudentAttendanceScreen = () => {
  const attendance = [
    { date: '2024-10-01', status: 'Present', subject: 'ADV 102' },
    { date: '2024-10-02', status: 'Absent', subject: 'ADV 102' },
    { date: '2024-10-03', status: 'Present', subject: 'Networking 101' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>My Attendance</Title>
          <Paragraph>Section: 2A | ADV 102 - 85% (17/20)</Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.listCard}>
        <Card.Content>
          {attendance.map((record, index) => (
            <List.Item
              key={index}
              title={`${record.date} - ${record.subject}`}
              description={record.status}
              left={() => (
                <List.Icon color={record.status === 'Present' ? '#4CAF50' : '#F44336'} icon="check-circle" />
              )}
            />
          ))}
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    margin: 20,
    elevation: 4,
  },
  listCard: {
    margin: 20,
    elevation: 4,
  },
});

export default StudentAttendanceScreen;

