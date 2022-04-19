import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useForm, FormProvider } from 'react-hook-form';

import Task from '../../pages/App/CreateTask/Task/Task';
import User from '../../pages/App/CreateTask/User/User';
import Priority from '../../pages/App/CreateTask/Priority/Priority';
import Extra from '../../pages/App/CreateTask/Extra/Extra';
import Phone from '../../pages/App/CreateTask/Phone/Phone';
import Address from '../../pages/App/CreateTask/Address/Address';
import SocialMedia from '../../pages/App/CreateTask/SocialMedia/SocialMedia';

import * as Yup from 'yup';
import Gender from '../../pages/App/CreateTask/Gender/Gender';
import Measures from '../../pages/App/CreateTask/Measures/Measures';
import { schema } from './schema';
import Errors from '../../pages/App/CreateTask/Errors/Errors';

const Stack = createNativeStackNavigator();

const initialValues = {
  firstName: '',
  lastName: '',
  task: '',
  priority: 'low',
  color: 'red',
  phoneNumber: '',
  documentNumber: '',
  country: '',
  city: '',
  address: '',
  twitter: '',
  instagram: '',
  facebook: '',
  gender: '',
  height: '',
  weight: ''
};

const CreateStack = () => {
  const methods = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: initialValues
  });

  return (
    <FormProvider {...methods}>
      <Stack.Navigator initialRouteName='User'>
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
            title: 'User'
          }}
          component={User}
          name='User'
        />
        <Stack.Screen
          options={{
            gestureEnabled: true,
            title: 'Priority'
          }}
          component={Priority}
          name='Priority'
        />
        <Stack.Screen
          options={{
            gestureEnabled: true,
            title: 'Extra'
          }}
          component={Extra}
          name='Extra'
        />
        <Stack.Screen
          options={{
            gestureEnabled: true,
            title: 'Phone'
          }}
          component={Phone}
          name='Phone'
        />
        <Stack.Screen
          options={{
            gestureEnabled: true,
            title: 'Address'
          }}
          component={Address}
          name='Address'
        />
        <Stack.Screen
          options={{
            gestureEnabled: true,
            title: 'SocialMedia'
          }}
          component={SocialMedia}
          name='SocialMedia'
        />
        <Stack.Screen
          options={{
            gestureEnabled: true,
            title: 'Gender'
          }}
          component={Gender}
          name='Gender'
        />
        <Stack.Screen
          options={{
            gestureEnabled: true,
            title: 'Measures'
          }}
          component={Measures}
          name='Measures'
        />
        <Stack.Screen
          options={{
            gestureEnabled: true,
            title: 'Errors'
          }}
          component={Errors}
          name='Errors'
        />
      </Stack.Navigator>
    </FormProvider>
  );
};

export default CreateStack;
