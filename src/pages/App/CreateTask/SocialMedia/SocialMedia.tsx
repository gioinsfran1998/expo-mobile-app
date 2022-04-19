import React, { useState } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { Text } from 'react-native';
import Button from '../../../../components/shared/Button/Button';
import Input from '../../../../components/shared/Input/Input';
import NavigationBar from '../../../../components/shared/NavigationBar/NavigationBar';

import * as S from './style';

const SocialMedia = ({ navigation }) => {
  const {
    getValues,
    control,
    formState: { errors },
    trigger
  } = useFormContext();

  const saveFormToRight = () => {
    navigation.navigate('Gender');
    trigger(['twitter', 'instagram', 'facebook']);
  };

  const saveFormToLeft = () => {
    navigation.goBack();
  };

  return (
    <S.Wrapper>
      <NavigationBar
        title='Go back to Address'
        onPressRight={saveFormToRight}
        onPressLeft={saveFormToLeft}
      />
      <S.Description>Add your social media</S.Description>

      <Input
        type='Default'
        placeholder='Twitter'
        name='twitter'
        label='Twitter:'
        control={control}
        error={errors.twitter?.message}
      />
      <Input
        type='Default'
        placeholder='Instagram'
        name='instagram'
        label='Instagram:'
        control={control}
        error={errors.instagram?.message}
      />

      <Input
        type='Default'
        placeholder='Facebook'
        name='facebook'
        label='Facebook:'
        control={control}
        error={errors.facebook?.message}
      />

      <Text style={{ padding: 10, color: '#fafafa' }}>
        {JSON.stringify(getValues(), null, 2)}
      </Text>
    </S.Wrapper>
  );
};

export default SocialMedia;
