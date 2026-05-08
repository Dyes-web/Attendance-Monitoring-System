import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

/**
 * Centralizes NavigationContainer usage.
 * Some React Navigation v7 type checks are strict; keeping this wrapper
 * reduces the surface area of navigator typing issues.
 */
export const NavigationWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <NavigationContainer>{children as React.ReactElement}</NavigationContainer>;
};

