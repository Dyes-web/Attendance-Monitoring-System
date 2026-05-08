import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Card, Title } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { register } from './services/authService';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('teacher');
  const navigation = useNavigation();

  const handleRegister = async () => {
    try {
      await register(email, password, role as 'teacher');
      await AsyncStorage.setItem('userRole', role);
      Alert.alert('Success', 'User registered and saved to Firestore!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Registration failed');
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Register</Title>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            style={styles.input}
            keyboardType="email-address"
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            mode="outlined"
            style={styles.input}
          />
          <Picker selectedValue={role} onValueChange={setRole} style={styles.picker}>
            <Picker.Item label="Teacher" value="teacher" />
            <Picker.Item label="Student" value="student" />
          </Picker>
          <Button mode="contained" onPress={handleRegister} style={styles.button}>
            Register & Save to Firestore
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f5f5f5' },
  card: { padding: 20 },
  input: { marginBottom: 15 },
  picker: { marginBottom: 15 },
  button: { marginTop: 10 },
});

export default RegisterScreen;

