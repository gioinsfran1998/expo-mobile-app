import React, { useState } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { Text } from 'react-native';
import Button from '../../../../components/shared/Button/Button';
import Input from '../../../../components/shared/Input/Input';
import NavigationBar from '../../../../components/shared/NavigationBar/NavigationBar';

import * as S from './style';

const Phone = ({ navigation }) => {
  const {
    watch,
    getValues,
    setValue,
    control,
    formState: { errors },
    trigger
  } = useFormContext();

  const saveFormToRight = () => {
    navigation.navigate('Address');
    trigger(['phoneNumber', 'documentNumber']);
  };

  const saveFormToLeft = () => {
    navigation.goBack();
  };

  return (
    <S.Wrapper>
      <NavigationBar
        title='Go back to Extra'
        onPressRight={saveFormToRight}
        onPressLeft={saveFormToLeft}
      />
      <S.Description>Enter your phone number and document number</S.Description>

      <Input
        type='Number'
        placeholder='Phone number'
        name='phoneNumber'
        label='Phone Number:'
        control={control}
        error={errors.phoneNumber?.message}
      />
      <Input
        type='Number'
        placeholder='Document Number'
        name='documentNumber'
        label='Document Number:'
        control={control}
        error={errors.documentNumber?.message}
      />

      <Text style={{ padding: 10, color: '#fafafa' }}>
        {JSON.stringify(getValues(), null, 2)}
      </Text>
    </S.Wrapper>
  );
};

export default Phone;
