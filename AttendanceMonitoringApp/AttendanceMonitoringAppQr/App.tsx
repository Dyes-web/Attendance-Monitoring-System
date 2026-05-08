import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import TeacherDashboardScreen from './TeacherDashboardScreen';
import StudentDashboardScreen from './StudentDashboardScreen';
import TeacherClassesScreen from './TeacherClassesScreen';
import StudentAttendanceScreen from './StudentAttendanceScreen';
import TakeAttendanceScreen from './TakeAttendanceScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState('Login');

  useEffect(() => {
    const checkUserRole = async () => {
      const role = await AsyncStorage.getItem('userRole');
      if (role) {
        setInitialRoute(role === 'teacher' ? 'TeacherDashboard' : 'StudentDashboard');
      }
    };
    checkUserRole();
  }, []);

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <NavigationContainer>
        <Stack.Navigator id="main" screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="TeacherDashboard" component={TeacherDashboardScreen} />
            <Stack.Screen name="StudentDashboard" component={StudentDashboardScreen} />
            <Stack.Screen name="TeacherClasses" component={TeacherClassesScreen} />
            <Stack.Screen name="StudentAttendance" component={StudentAttendanceScreen} />
            <Stack.Screen name="TakeAttendance" component={TakeAttendanceScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
