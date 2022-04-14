import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useForm, FormProvider } from 'react-hook-form';

import Task from '../../pages/App/CreateTask/Task/Task';
import User from '../../pages/App/CreateTask/User/User';
import Priority from '../../pages/App/CreateTask/Priority/Priority';
import Extra from '../../pages/App/CreateTask/Extra/Extra';

import * as Yup from 'yup';

const Stack = createNativeStackNavigator();

const schema = Yup.object().shape({
  firstName: Yup.string().required('*First Name cannot be empty'),
  lastName: Yup.string().required('*Last Name cannot be empty'),
  location: Yup.string().required('*Location cannot be empty'),
  task: Yup.string().required('*Task cannot be empty')
});
const initialValues = {
  firstName: '',
  lastName: '',
  location: '',
  task: '',
  priority: 'low'
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
      </Stack.Navigator>
    </FormProvider>
  );
};

export default CreateStack;
