import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Form from '../pages/App/Form/Form';
import Priority from '../pages/App/Form/Priority/Priority';
import Task from '../pages/App/Form/Task/Task';
import TabStack from './TabStack/TabStack';

const Stack = createNativeStackNavigator();

const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TabStack'>
        <Stack.Screen
          options={{
            headerShown: false,
            gestureEnabled: true
          }}
          component={TabStack}
          name='TabStack'
        />
        <Stack.Screen
          options={{
            gestureEnabled: true,
            title: 'Task'
          }}
          component={Task}
          name='Task'
        />
        <Stack.Screen
          options={{
            gestureEnabled: true,
            title: 'Form'
          }}
          component={Form}
          name='Form'
        />
        <Stack.Screen
          options={{
            gestureEnabled: true,
            title: 'Priority'
          }}
          component={Priority}
          name='Priority'
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
