import React from 'react';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';


const DashboardScreen = () => {

  const handleLogout = () => {
    Alert.alert('Logout', 'Logged out successfully');
    // TODO: Add real logout (Firebase / context / navigation reset)
  };

  return (
    <ScrollView style={styles.container}>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Welcome back!</Title>
          <Paragraph>
            Teacher Dashboard - Manage your classes and attendance
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Today's Overview</Title>
          <Paragraph>
            Classes: 3 active | Students: 45 | Attendance Rate: 92%
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Quick Actions</Title>
          <Paragraph>
            Tap to take attendance or view reports
          </Paragraph>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={handleLogout}
        style={styles.logout}
        icon="logout"
      >
        Logout
      </Button>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    margin: 10,
    borderRadius: 8,
    elevation: 2,
  },
  logout: {
    margin: 20,
  },
});

export default DashboardScreen;