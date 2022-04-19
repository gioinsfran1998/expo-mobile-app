import React, { useEffect } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import { useTaskStore } from '../../../../store/useTaskStore';
import { Text } from 'react-native';
import * as Yup from 'yup';

import NavigationBar from '../../../../components/shared/NavigationBar/NavigationBar';

import * as S from './style';
import Input from '../../../../components/shared/Input/Input';

const Task = ({ navigation }) => {
  const {
    watch,
    getValues,
    control,
    formState: { errors },
    trigger
  } = useFormContext();

  const saveFormToRight = () => {
    navigation.navigate('Priority');
    trigger('task');
  };

  const saveFormToLeft = () => {
    navigation.goBack();
  };

  return (
    <S.Wrapper>
      <NavigationBar
        title='Go to Priority'
        onPressRight={saveFormToRight}
        onPressLeft={saveFormToLeft}
      />
      <S.Description>Add Task</S.Description>

      <Input
        type='TextArea'
        placeholder='Ingress task'
        name='task'
        label='Task:'
        control={control}
        error={errors.task?.message}
      />

      <Text style={{ padding: 10, color: '#fafafa' }}>
        {JSON.stringify(getValues(), null, 2)}
      </Text>
    </S.Wrapper>
  );
};

export default Task;
