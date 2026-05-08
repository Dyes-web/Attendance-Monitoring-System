// StudentsScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, FAB } from 'react-native-paper';

const StudentsScreen = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Students</Title>
          <Title>Students list will load here from Firestore</Title>
        </Card.Content>
      </Card>
      <FAB icon="plus" style={styles.fab} onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  card: { margin: 10 },
  fab: { position: 'absolute', margin: 16, right: 16, bottom: 16 },
});

export default StudentsScreen;

