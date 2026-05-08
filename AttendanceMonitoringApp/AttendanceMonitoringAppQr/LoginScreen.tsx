import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Card, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from './services/authService';

const LoginScreen = () => {
  const [email, setEmail] = useState('teacher@example.com');
  const [password, setPassword] = useState('123456');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      await login(email, password);
      await AsyncStorage.setItem('userRole', 'teacher'); // Default teacher for demo
      navigation.navigate('TeacherDashboard' as never);
    } catch (error) {
      Alert.alert('Error', 'Login failed');
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Login</Title>
          <TextInput label="Email" value={email} onChangeText={setEmail} mode="outlined" style={styles.input} />
          <TextInput label="Password" value={password} onChangeText={setPassword} secureTextEntry mode="outlined" style={styles.input} />
          <Button mode="contained" onPress={handleLogin} style={styles.button}>
            Login
          </Button>
          <Button mode="outlined" onPress={() => navigation.navigate('Register' as never)} style={styles.button}>
            Register
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
  button: { marginTop: 10 },
});

export default LoginScreen;

