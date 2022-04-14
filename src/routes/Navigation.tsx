import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import CreateStack from './CreateStack/CreateStack';
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
            title: 'CreateStack',
            headerShown: false
          }}
          component={CreateStack}
          name='CreateStack'
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
