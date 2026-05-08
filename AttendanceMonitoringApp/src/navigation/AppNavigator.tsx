import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoadingScreen from '../screens/LoadingScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ClassesScreen from '../screens/ClassesScreen';
import StudentsScreen from '../screens/StudentsScreen';
import TakeAttendanceScreen from '../screens/TakeAttendanceScreen';
import ViewAttendanceScreen from '../screens/ViewAttendanceScreen';
import { useAuth } from '../contexts/AuthContext';


const Stack = createNativeStackNavigator<any>();
const Tab = createBottomTabNavigator<any>();


const DashboardTabNavigator = () => {
  return (
    <Tab.Navigator
      id="main-tabs"
      screenOptions={{ headerShown: false }}
    >

      <Tab.Screen name="DashboardTab" component={DashboardScreen} options={{ title: 'Dashboard' }} />
      <Tab.Screen name="ClassesTab" component={ClassesScreen} options={{ title: 'Classes' }} />
      <Tab.Screen name="StudentsTab" component={StudentsScreen} options={{ title: 'Students' }} />
      <Tab.Screen name="AttendanceTab" component={TakeAttendanceScreen} options={{ title: 'Take Attendance' }} />
      <Tab.Screen name="ReportsTab" component={ViewAttendanceScreen} options={{ title: 'Reports' }} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator id="root-stack" screenOptions={{ headerShown: false }}>

      {user ? (
        <Stack.Screen name="MainTabs" component={DashboardTabNavigator} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;

