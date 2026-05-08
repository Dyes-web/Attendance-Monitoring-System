import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  TakeAttendance: { classId: string };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'TakeAttendance'>;

interface Class {
  id: string;
  name: string;
  students: number;
}

const classes: Class[] = [
  { id: 'adv102', name: '2A - ADV 102', students: 30 },
  { id: 'networking101', name: '2B - Networking 101', students: 28 },
];

const TeacherClassesScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleClassPress = (classId: string) => {
    navigation.navigate('TakeAttendance', { classId });
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.headerCard}>
        <Card.Content>
          <Title>My Classes (Agie C. Alaton)</Title>
        </Card.Content>
      </Card>
      {classes.map((cls) => (
        <TouchableOpacity key={cls.id} onPress={() => handleClassPress(cls.id)}>
          <Card style={styles.classCard}>
            <Card.Content>
              <Title>{cls.name}</Title>
              <Text>Students: {cls.students}</Text>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerCard: {
    margin: 20,
    elevation: 4,
  },
  classCard: {
    marginHorizontal: 20,
    marginVertical: 10,
    elevation: 2,
  },
});

export default TeacherClassesScreen;

