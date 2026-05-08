import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph, Button, Avatar, Badge } from 'react-native-paper';

const DashboardScreen = () => {
  const stats = [
    { title: 'Classes', value: '5', color: '#2196F3' },
    { title: 'Students', value: '120', color: '#4CAF50' },
    { title: 'Today', value: '95%', color: '#FF9800' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Title style={styles.welcome}>Welcome Teacher!</Title>
      </View>
      <View style={styles.stats}>
        {stats.map((stat, index) => (
          <Card key={index} style={[styles.statCard, { backgroundColor: stat.color + '20' }]}>
            <Card.Content>
              <View style={styles.statRow}>
                <Avatar.Text size={24} label={stat.value} style={{ backgroundColor: stat.color }} />
                <View>
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
          <Button mode="contained" style={styles.actionButton}>Take Attendance</Button>
          <Button mode="outlined" style={styles.actionButton}>View Students</Button>
          <Button mode="outlined" style={styles.actionButton}>Reports</Button>
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
  stats: {
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
  actionCard: {
    margin: 20,
    elevation: 4,
  },
  actionButton: {
    marginTop: 10,
  },
});

export default DashboardScreen;
