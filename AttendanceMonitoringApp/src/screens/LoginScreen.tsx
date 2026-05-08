import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Card, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { login } from '../services/authService';

const LoginScreen = () => {
  const [email, setEmail] = useState('teacher@example.com');
  const [password, setPassword] = useState('123456');

  const navigation = useNavigation(); // keep simple

  const handleLogin = async () => {
    if (!email.trim() || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    try {
      await login(email.trim(), password);
      Alert.alert('Success', 'Logged in successfully!');
    } catch (err) {
      Alert.alert('Login Failed', 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Attendance App Login</Title>

          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            style={styles.input}
            autoCapitalize="none"
          />

          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            mode="outlined"
            style={styles.input}
          />

          <Button mode="contained" onPress={handleLogin} style={styles.button}>
            Login
          </Button>

          <Button
            mode="outlined"
            onPress={() => (navigation as any).navigate('Register')}
            style={styles.button}
          >
            Create Account
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
    padding: 30,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
});

export default LoginScreen;