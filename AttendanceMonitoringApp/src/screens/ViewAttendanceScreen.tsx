// ViewAttendanceScreen.tsx - Reports
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';

const ViewAttendanceScreen = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Attendance Reports</Title>
          <Title>Select date range to view reports</Title>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  card: { margin: 10 },
});

export default ViewAttendanceScreen;

