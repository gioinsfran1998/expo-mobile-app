import React, { useState } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { Text } from 'react-native';
import Button from '../../../../components/shared/Button/Button';
import Input from '../../../../components/shared/Input/Input';
import NavigationBar from '../../../../components/shared/NavigationBar/NavigationBar';

import * as S from './style';

const Address = ({ navigation }) => {
  const {
    watch,
    getValues,
    setValue,
    control,
    trigger,
    formState: { errors }
  } = useFormContext();

  const saveFormToRight = () => {
    navigation.navigate('SocialMedia');
    trigger(['country', 'city', 'address']);
  };

  const saveFormToLeft = () => {
    navigation.goBack();
  };

  return (
    <S.Wrapper>
      <NavigationBar
        title='Go back to Phone'
        onPressRight={saveFormToRight}
        onPressLeft={saveFormToLeft}
      />
      <S.Description>Add your address</S.Description>

      <Input
        type='Default'
        placeholder='Country'
        name='country'
        label='Country:'
        control={control}
        error={errors.country?.message}
      />
      <Input
        type='Default'
        placeholder='City'
        name='city'
        label='City:'
        control={control}
        error={errors.city?.message}
      />

      <Input
        type='Default'
        placeholder='Address'
        name='address'
        label='Address:'
        control={control}
        error={errors.address?.message}
      />

      <Text style={{ padding: 10, color: '#fafafa' }}>
        {JSON.stringify(getValues(), null, 2)}
      </Text>
    </S.Wrapper>
  );
};

export default Address;
