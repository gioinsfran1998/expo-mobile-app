import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import Home from '../../pages/App/Home/Home';
import Tasks from '../../pages/App/Tasks/Tasks';
import { useTheme } from 'styled-components/native';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName='home'
      screenOptions={{
        tabBarActiveTintColor: theme.palette.primary.light,
        headerShown: false
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='home' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Tasks'
        component={Tasks}
        options={{
          title: 'Tasks',
          tabBarLabel: 'Tasks',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='tasks' size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
