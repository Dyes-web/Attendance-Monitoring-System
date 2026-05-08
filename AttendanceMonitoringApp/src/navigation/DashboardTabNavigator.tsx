import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import ClassesScreen from '../screens/ClassesScreen';
import StudentsScreen from '../screens/StudentsScreen';
import ViewAttendanceScreen from '../screens/ViewAttendanceScreen';

export type TabParamList = {
  Dashboard: undefined;
  Classes: undefined;
  Students: undefined;
  Reports: undefined;
};

const Tab = createBottomTabNavigator<any>();


const DashboardTabNavigator = () => {
  return (
    <Tab.Navigator id="dashboard-tabs">

      <Tab.Screen 
        name="Dashboard" 
        component={DashboardScreen}
        options={{ tabBarLabel: 'Dashboard' }}
      />
      <Tab.Screen 
        name="Classes" 
        component={ClassesScreen}
        options={{ tabBarLabel: 'Classes' }}
      />
      <Tab.Screen 
        name="Students" 
        component={StudentsScreen}
        options={{ tabBarLabel: 'Students' }}
      />
      <Tab.Screen 
        name="Reports" 
        component={ViewAttendanceScreen}
        options={{ tabBarLabel: 'Reports' }}
      />
    </Tab.Navigator>
  );
};

export default DashboardTabNavigator;

