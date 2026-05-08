import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const stats = [
  { title: 'Classes', value: '6', color: '#2196F3' },
  { title: 'Students', value: '150', color: '#4CAF50' },
  { title: 'This Week', value: '92%', color: '#FF9800' },
];

const TeacherDashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Title style={styles.welcome}>Teacher Dashboard</Title>
      </View>
      <View style={styles.statsContainer}>
        {stats.map((stat, index) => (
          <Card key={index} style={[styles.statCard, { backgroundColor: stat.color + '20' }]}>
            <Card.Content>
              <View style={styles.statRow}>
                <Avatar.Text size={32} label={stat.value} style={{ backgroundColor: stat.color }} />
                <View style={styles.statText}>
                  <Paragraph>{stat.title}</Paragraph>
                  <Title>{stat.value}</Title>
                </View>
              </View>
            </Card.Content>
          </Card>
        ))}
      </View>
      <Card style={styles.actionCard}>
        <Card.Content>
          <Title>Quick Actions</Title>
          <Button mode="contained" onPress={() => navigation.navigate('TeacherClasses' as never)} style={styles.actionButton}>
            My Classes
          </Button>
          <Button mode="outlined" onPress={() => navigation.navigate('TakeAttendance' as never)} style={styles.actionButton}>
            Take Attendance
          </Button>
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
  header: {
    backgroundColor: '#2196F3',
    padding: 20,
  },
  welcome: {
    color: 'white',
    fontSize: 24,
  },
  statsContainer: {
    padding: 20,
    gap: 15,
  },
  statCard: {
    elevation: 4,
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  statText: {
    flex: 1,
  },
  actionCard: {
    margin: 20,
    elevation: 4,
  },
  actionButton: {
    marginTop: 10,
  },
});

export default TeacherDashboardScreen;
