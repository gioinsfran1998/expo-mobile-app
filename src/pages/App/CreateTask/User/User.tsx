import React from 'react';

import { useFormContext } from 'react-hook-form';
import { Text } from 'react-native';

import NavigationBar from '../../../../components/shared/NavigationBar/NavigationBar';
import Input from '../../../../components/shared/Input/Input';

import * as S from './style';

const User = ({ navigation }) => {
  const {
    getValues,
    control,
    trigger,
    formState: { errors }
  } = useFormContext();

  const saveForm = () => {
    navigation.navigate('Task');
    trigger(['firstName', 'lastName']);
  };

  return (
    <S.Wrapper>
      <NavigationBar
        title='Go to Task'
        onPressRight={saveForm}
        onPressLeft={() => navigation.navigate('Tasks')}
      />
      <S.Description>Enter user data</S.Description>

      <Input
        type='Default'
        placeholder='First Last Name'
        name='firstName'
        label='First Name:'
        control={control}
        error={errors.firstName?.message}
      />

      <Input
        type='Default'
        placeholder='Ingress Last Name'
        name='lastName'
        label='Last Name:'
        control={control}
        error={errors.lastName?.message}
      />

      <Text style={{ padding: 10, color: '#fafafa' }}>
        {JSON.stringify(getValues(), null, 2)}
      </Text>
    </S.Wrapper>
  );
};

export default User;
