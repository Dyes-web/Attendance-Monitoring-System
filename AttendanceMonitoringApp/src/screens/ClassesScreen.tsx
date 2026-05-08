// ClassesScreen.tsx - List/Add/Edit Classes
import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { FAB, Card, Title, Text } from 'react-native-paper';

type ClassItem = {
  id: string;
  name: string;
};

const ClassesScreen = () => {
  const [classes, setClasses] = useState<ClassItem[]>([]);

  const addClass = () => {
    Alert.alert('Add Class', 'Class name input would go here');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={classes}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text>No classes yet. Tap + to add one.</Text>
          </View>
        }
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.name}</Title>
            </Card.Content>
          </Card>
        )}
      />

      <FAB icon="plus" onPress={addClass} style={styles.fab} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 10,
    borderRadius: 8,
    elevation: 2,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
  empty: {
    marginTop: 50,
    alignItems: 'center',
  },
});

export default ClassesScreen;
